# PDF to MD Convert

## Option 1 - jzillmann.github.io/pdf-to-markdown-staging/
* A website that parces your pdf locally on your browser
* Upload your PDF to [jzillmann.github.io/pdf-to-markdown-staging/](https://jzillmann.github.io/pdf-to-markdown-staging/)

## Option 2 - @opendocsg/pdf2md
* Run a local PDF file parser with this JavaScript npm library
* Details: [@opendocsg/pdf2md](https://www.npmjs.com/package/@opendocsg/pdf2md)

Install:

```shell
npm i @opendocsg/pdf2md
```

Usage:

```shell
npx @opendocsg/pdf2md --inputFolderPath=[your input folder path] --outputFolderPath=[your output folder path]
```

⚠️ `outputFolderPath` is required

Example
* Convert all PDF files in the current folder

```shell
npx @opendocsg/pdf2md --inputFolderPath=. --outputFolderPath=.
```
