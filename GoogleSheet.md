# Quick Notes Regarding Google Sheets

<!-- markdownlint-disable MD007 -->
* [Count Duplicates in Google Sheets](#count-duplicates-in-google-sheets)
* [Remove Specified Text from a Cell](#remove-specified-text-from-a-cell)
<!-- markdownlint-enable MD007 -->

## Count Duplicates in Google Sheets
* [`COUNTIF`](https://support.google.com/docs/answer/3256550): Returns a conditional count across a range.
* [`COUNTIFS`](https://support.google.com/docs/answer/3093480): Returns the count of a range depending on multiple criteria.

## Remove Specified Text from a Cell
Use [SUBSTITUTE](https://support.google.com/docs/answer/3094215) function!
* Replaces existing text with new text in a string.

Ex/ `SUBSTITUTE("search for it","search for","Google")`

`SUBSTITUTE(text_to_search, search_for, replace_with, [occurrence_number])`

Reference: [Remove whitespaces and other characters or text strings in Google Sheets from multiple cells at once - Ablebits.com](https://www.ablebits.com/office-addins-blog/2021/04/29/google-sheets-remove-text/)
