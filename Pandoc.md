# Pandoc - Universal Document Converter
[Pandoc - Universal Document Converter](https://pandoc.org/)

## Markdown to HTML

```bash
pandoc -f markdown -t html5 -o output.html input.md -c style.css
```

## Markdown to PDF

```bash
pandoc -f markdown input.md --pdf-engine=xelatex -o example13.pdf
```

## Markdown to Word docx

```bash
pandoc -f markdown input.md -o output.docx
```

## HTML to Markdown ([Pandoc’s Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown))

```bash
pandoc -f html -t markdown input.html -o output.md
```

## HTML to Markdown ([GitHub-Flavored Markdown](https://docs.github.com/en/github/writing-on-github))

```bash
pandoc -f html -t gfm input.html -o output.md
```

## GitHub-Flavored Markdown to Word docx

```bash
pandoc -f gfm input.md -o output.docx
```

## Word Docx to GitHub-Flavored Markdown

```bash
pandoc --from=docx input.docx --to=gfm --output=output.md
```

## Rich Text Format to GitHub-Flavored Markdown

```bash
pandoc --from=rtf input.rtf --to=gfm --output=output.md
```

<!-- ## PowerPoint to Markdown -->

---

## Thank you! References
[Convert markdown files to html with Pandoc](https://gist.github.com/atelierbram/09c8fb742f1518f09ff9e4338ab8f7fb)
