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
| [ryanoasis/nerd-fonts](https://github.com/ryanoasis/nerd-fonts) | `brew tap homebrew/cask-fonts`<br>`brew install --cask font-hack-nerd-font` | Fonts including Fira Code & MesloLGS NF |
| [tonsky/FiraCode](https://github.com/tonsky/FiraCode)           | `brew cask install font-fira-code`      | Great font for coding              |

## Terminal
  * Background Hex: `#630436`
  * Text Hex: `#FFFFFF`
  * Font: MesloLGS NF Regular 15
    * `brew tap homebrew/cask-fonts`
    * `brew install --cask font-hack-nerd-font`
  * Selection Hex: `#00C9C1`

## Setting up [romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k) for your Terminal
1. Make sure you installed [ryanoasis/nerd-fonts](https://github.com/ryanoasis/nerd-fonts)
   * `brew tap homebrew/cask-fonts`
   * `brew install --cask font-hack-nerd-font`
2. Install
   * `git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k`
   * `echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc`
3. Go through the `p10k configure` configuration wizard
    * ![configuration-wizard.gif](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/configuration-wizard.gif)
    * Type in the choice you want.
    * Example: `Choice [12345rq]: ...`
      * 1 ~ 5 are the options
      * r is for restarting the configuration wizard
      * q is for quitting without saving
