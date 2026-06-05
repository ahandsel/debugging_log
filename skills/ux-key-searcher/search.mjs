#!/usr/bin/env node
// Exact-match UX copy search across phrase-data CSV files.
//
// Reads a JSON array of query strings (from stdin or --queries file) and prints
// a JSON array of results. Each result lists every exact match found in the
// phrase-data/{project}-{lang}-copy.csv files, with the matching key_name, the
// comment (used for the Description column), and the project identifier.
//
// Usage:
//   echo '["Close", "Add directory"]' | node search.mjs --lang en
//   node search.mjs --lang ja --queries queries.json
//   node search.mjs --help
//
// Output:
//   Writes a JSON array to stdout, one element per query, in the input order:
//   { query, match_count, matches: [{ project, key, comment }] }. `query` is
//   the original query string, `match_count` is the number of exact matches,
//   and `matches` lists each match's project identifier, key_name, and comment.
//
// Version history:
//   v1.0 - 2026-06-04 - initial version

import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const USAGE = `Exact-match UX copy search across phrase-data CSV files.

Usage:
  echo '["Close", "Add directory"]' | node search.mjs --lang en
  node search.mjs --lang ja --queries queries.json
  node search.mjs --help

Options:
  --lang <en|ja>     Language column to match against (required).
  --queries <file>   Read the JSON array of queries from a file instead of stdin.
  --data-dir <dir>   Directory holding the *-<lang>-copy.csv files (default: phrase-data).
  -h, --help         Print this help and exit.
`;

function parseArgs(argv) {
  const args = { dataDir: 'phrase-data' };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '-h' || arg === '--help') args.help = true;
    else if (arg === '--lang') args.lang = argv[(i += 1)];
    else if (arg === '--data-dir') args.dataDir = argv[(i += 1)];
    else if (arg === '--queries') args.queries = argv[(i += 1)];
    else throw new Error(`Unknown argument '${arg}'. See --help for usage.`);
  }
  if (args.help) return args;
  if (!['en', 'ja'].includes(args.lang)) {
    throw new Error("--lang must be 'en' or 'ja'");
  }
  return args;
}

// Normalize a cell or CSV value so equal copy compares equal. Markdown table
// cells use <br> for line breaks; the CSV stores literal newlines. Collapse
// both to a single newline and trim outer whitespace.
function normalize(value) {
  if (value == null) return '';
  return value
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/\r\n/g, '\n')
    .trim();
}

// Minimal RFC 4180 CSV parser: handles quoted fields, embedded commas and
// newlines, and "" escaped quotes. Returns an array of row arrays.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n' || char === '\r') {
      if (char === '\r' && text[i + 1] === '\n') i += 1;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += char;
    }
  }
  if (field !== '' || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function readStdin() {
  return readFileSync(0, 'utf8');
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    process.stdout.write(USAGE);
    process.exit(0);
  }
  const raw = args.queries ? readFileSync(args.queries, 'utf8') : readStdin();
  const queries = JSON.parse(raw);

  const suffix = `-${args.lang}-copy.csv`;
  const files = readdirSync(args.dataDir)
    .filter((name) => name.endsWith(suffix))
    .sort();

  // Build an index: normalized copy value -> list of matching entries.
  const index = new Map();
  for (const name of files) {
    const project = name.slice(0, -suffix.length);
    const rows = parseCsv(readFileSync(path.join(args.dataDir, name), 'utf8'));
    if (rows.length === 0) continue;
    const header = rows[0];
    const keyIdx = header.indexOf('key_name');
    const valIdx = header.indexOf(args.lang);
    const commentIdx = header.indexOf('comment');
    const missing = [
      ['key_name', keyIdx],
      [args.lang, valIdx],
      ['comment', commentIdx],
    ]
      .filter(([, idx]) => idx === -1)
      .map(([col]) => col);
    if (missing.length > 0) {
      throw new Error(
        `${path.join(args.dataDir, name)}: missing required column(s) ${missing
          .map((col) => `'${col}'`)
          .join(', ')}`,
      );
    }
    for (let r = 1; r < rows.length; r += 1) {
      const cells = rows[r];
      const value = normalize(cells[valIdx]);
      const entry = {
        project,
        key: cells[keyIdx] ?? '',
        comment: cells[commentIdx] ?? '',
      };
      if (index.has(value)) index.get(value).push(entry);
      else index.set(value, [entry]);
    }
  }

  const results = queries.map((query) => {
    const matches = index.get(normalize(query)) ?? [];
    return { query, match_count: matches.length, matches };
  });

  process.stdout.write(`${JSON.stringify(results, null, 2)}\n`);
}

main();
