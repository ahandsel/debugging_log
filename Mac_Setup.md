# My Mac Setup

## Magnet
[Magnet](https://magnet.crowdcafe.com/) is a fantastic window manager for Macs!  
I use the following shortcuts to move windows between three monitors:

| Magnet Preferences | Shortcut                           |
| ------------------ | ---------------------------------- |
| Left               | `OPTION ⌥` + `SHIFT ⇧` + `[`       |
| Right              | `OPTION ⌥` + `SHIFT ⇧` + `]`       |
| Up                 | `OPTION ⌥` + `SHIFT ⇧` + `↑`       |
| Up                 | `OPTION ⌥` + `SHIFT ⇧` + `↓`       |
| Next Display       | `OPTION ⌥` + `SHIFT ⇧` + `\`       |
| Previous Display   | `OPTION ⌥` + `SHIFT ⇧` + `Enter ↵` |
| Maximize           | `OPTION ⌥` + `SHIFT ⇧` + `A`       |

[‎Magnet on the Mac App Store](https://apps.apple.com/app/id441258766?mt=12)
It is only $5!

## Install Xcode
Terminal: `xcode-select --install`

## `brew` Install
Homebrew or `brew` is a package manager for MacOS. [brew.sh](https://brew.sh/)  
It is helpful to manage packages like font-fira-code, git, python, or node.

### Useful Commands

| Function                          | Command                    |
| --------------------------------- | -------------------------- |
| Install a package                 | `brew install <formula>`   |
| Uninstall a package               | `brew uninstall <formula>` |
| List all the installed formulae   | `brew list`                |
| Update Homebrew & packages        | `brew update`              |
| Display the Homebrew version      | `brew --version`           |
| Check for potential system issues | `brew doctor`              |

### Useful Packages

| Package                                                         | brew                                    | Note                               |
| --------------------------------------------------------------- | --------------------------------------- | ---------------------------------- |
| [Node.js](https://nodejs.org/en/)                               | `brew install node`                     | JavaScript server environment      |
| [Git](https://git-scm.com/)                                     | `brew install git`                      | distributed version control system |
| [Pandoc](https://pandoc.org/)                                   | `brew install pandoc`                   | Markdown ↔︎ Word Docx               |
| [ryanoasis/nerd-fonts](https://github.com/ryanoasis/nerd-fonts) | Fonts including Fira Code & MesloLGS NF |
| [tonsky/FiraCode](https://github.com/tonsky/FiraCode)           | `brew cask install font-fira-code`      | Great font for coding              |

## Terminal
  * Background Hex: `#630436`
  * Text Hex: `#FFFFFF`
  * Font: MesloLGS NF Regular 15
    * `brew tap homebrew/cask-fonts`
    * `brew install --cask font-hack-nerd-font`
  * Selection Hex: `#00C9C1`
