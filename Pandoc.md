# [Pandoc - Universal Document Converter](https://pandoc.org/)

## Markdown to HTML

```bash
  pandoc -f markdown -t html5 -o output.html input.md -c style.css
```

## Markdown to PDF

```bash
pandoc -f markdown input.md --pdf-engine=xelatex -o example13.pdf
```

<!-- ## PowerPoint to Markdown -->

---

## Thank you! References
[Convert markdown files to html with Pandoc](https://gist.github.com/atelierbram/09c8fb742f1518f09ff9e4338ab8f7fb)