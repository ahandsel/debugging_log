# Compilation of random notes in using VS Code

## Outline <!-- omit in toc -->
<!-- markdownlint-disable MD007 -->
* [Display Whitespace in VS Code](#display-whitespace-in-vs-code)
* [Remove Duplicate Lines in VS Code](#remove-duplicate-lines-in-vs-code)
  * [If the lines order is not important](#if-the-lines-order-is-not-important)
  * [If the lines order *IS* important (can't alphabetically sort)](#if-the-lines-order-is-important-cant-alphabetically-sort)
* [How to install VS Code Extensions Manually?](#how-to-install-vs-code-extensions-manually)
* [VS Code & romkatv/powerlevel10k](#vs-code--romkatvpowerlevel10k)
<!-- markdownlint-enable MD007 -->

## Display Whitespace in VS Code
  * It is useful to see whitespace in your code editor.
  * `editor.renderWhitespace` in the [VS Code Setting](https://code.visualstudio.com/docs/getstarted/settings) governs how to display whitespace. It takes in the following input:
    * `none` - Whitespace will never be displayed.
    * `boundary` - Whitespace will be displayed except for single spaces between words.
    * `section` - (Default) Whitespace will be displayed only on selected text.
    * `all` - All whitespace characters will be displayed all the time.
  * I recommend setting `editor.renderWhitespace` to `boundary`.
  * To change your VS Code Setting to display whitespace:
    * File > Preference > Setting
    * Search `editor.renderWhitespace`
    * Select `boundary` from the dropdown menu
  * Demo gif:
    * ![vscode_whitespace_setting.gif](../img/vscode_whitespace_setting.gif)

## Remove Duplicate Lines in VS Code
  * Original: [marcosvpj/vscode-remove-duplicate-lines.md](https://gist.github.com/marcosvpj/f04116e5443284ccb5f14f3c443a2d0d)

### If the lines order is not important
1. Sort lines alphabetically
2. Open VS Code's Find Control: `Control` + `F`
3. Toggle "Replace mode"
4. Toggle "Use Regular Expression" (the icon with the **`.*`** symbol)
5. In the **search** field: `^(.*)(\n\1)+$`
6. In the "**replace with**" field,: `$1`
7. Click "Replace All"

### If the lines order *IS* important (can't alphabetically sort)
  * In this case, either resort to a solution outside VS Code ([example](https://stackoverflow.com/q/11532157/3258851))
  * OR if your document is not very large...
    * **search**: `((^[^\S$]*?(?=\S)(?:.*)+$)[\S\s]*?)^\2$(?:\n)?`
    * **replace with**: `$1`
    * Click the "Replace All" button (*as many times as there are duplicate occurrences*)

## How to install VS Code Extensions Manually?
  * Based on this [Stack Overflow Thread](https://stackoverflow.com/questions/42017617/how-to-install-vs-code-extension-manually)
  * Example VS Extension from GitHub: [znck/ grammarly](https://github.com/znck/grammarly)
  * Go to the GitHub repo's Releases and download the `.vsix` file
    * <https://github.com/znck/grammarly/releases>
    * --> `grammarly-0.12.2.vsix`
  * In VS Code, Extensions > `...` > `Install from VSIX...`
    * ![Install from VSIX Screenshot](https://i.stack.imgur.com/nPF49.png)
  * Verify the Extension was installed!

## VS Code & [romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k)
  1. Install [ryanoasis/nerd-fonts](https://github.com/ryanoasis/nerd-fonts)
     * `brew tap homebrew/cask-fonts`
     * `brew install --cask font-hack-nerd-font`
  2. Configure VS Code Setting
     * Open File → Preferences → Settings
     * For `terminal.integrated.fontFamily`, set `MesloLGS NF`
     * For `terminal.explorerKind`, set `external`
     * For `terminal.external.osxExec`, set `iTerm.app`
