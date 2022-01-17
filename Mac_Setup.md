# My Mac Setup

## Outline<!-- omit in toc -->
<!-- markdownlint-disable MD007 -->
* [Recommend Mac Apps](#recommend-mac-apps)
  * [PDF Expert - $80](#pdf-expert---80)
  * [CleanMyMac X - $34.99 Per Year or $89.99 One-Time](#cleanmymac-x---3499-per-year-or-8999-one-time)
  * [Sensible Paster - free](#sensible-paster---free)
  * [Rocket - free / $10](#rocket---free--10)
  * [Magnet - $5](#magnet---5)
* [Mac Development Setup](#mac-development-setup)
  * [Xcode x Terminal](#xcode-x-terminal)
  * [Terminal Custom Setup](#terminal-custom-setup)
  * [Setting up romkatv/powerlevel10k for your Terminal](#setting-up-romkatvpowerlevel10k-for-your-terminal)
  * [`brew`](#brew)
    * [Useful Commands](#useful-commands)
    * [Useful Packages](#useful-packages)
<!-- markdownlint-enable MD007 -->

## Recommend Mac Apps

### PDF Expert - $80
  * Download:
    * Mac App Store: [PDF Expert - Edit and Sign PDF on the Mac App Store](https://apps.apple.com/us/app/id1055273043?mt=12)
    * Developer's Website: [PDF Editor and Reader for Mac | PDF Expert](https://pdfexpert.com/)
  * Price: $80
  * My Review: Pricy BUT it does 100% of PDF-related tasks & does it well!
    * Do you need to read through huge PDF files for your college courses?
    * Do you need to edit PDF files constantly for your job?
    * Do you fill out countless of PDF forms of various quaility with your signature?
    * This App is for you!
  * Recommendations:
    * Get this app via Mac App Store & share it with your family via iCloud!

### CleanMyMac X - $34.99 Per Year or $89.99 One-Time
  * Download:
    * Mac App Store: [CleanMyMac X on the Mac App Store](https://apps.apple.com/us/app/cleanmymac-x/id1339170533?mt=12)
    * Developer's Website: [CleanMyMac X: The Best Mac Cleanup App for macOS](https://macpaw.com/cleanmymac)
  * Price:
    * CleanMyMac X Yearly Access $34.99
    * CleanMyMac X One-Time Purchase $89.99
    * Included in Setapp Subscription - [CleanMyMac X on Setapp](https://setapp.com/apps/cleanmymac)
  * My Review:
    * A MUST have Mac App to keep your machine working like a charm!
    * Powerful App Update & Uninstall tools!
    * Clear RAM easily & delete any files on your Mac!
    * Malware removal - Perform an in-depth check-up of your Mac for all kinds of vulnerabilities.
    * Privacy - Instantly remove your browsing history, along with online & offline activity traces.
  * Recommendations:
    * Get this app via the Setapp Subscription!~

### Sensible Paster - free
  * Download: [Sensible Paster on the Mac App Store](https://apps.apple.com/us/app/sensible-paster/id1553906835?mt=12)
  * Price: free
  * My Review: 5/5; Best Japanese OCR App for Mac; Secure as the OCR is done locally!
  * Real basic, but it works! It picks up most Japanese on my screen with high accuracy.
  * Works on M1 & Intel Macs
  * Japanese & English language support!

### Rocket - free / $10
  * Download: [Rocket – the best emoji app for Mac](https://matthewpalmer.net/rocket/)
  * Price: free or $10 upgrade
  * My Review: 5/5; GET THE UPGRADE! It makes your life so much easier
  * Rocket is a free Mac app that makes typing emoji faster and easier using auto-complete shortcuts
  * Ex: start typing :thumbsup (👍) & Rocket will help auto-complete it – in any app!
  * With Rocket Pro ($10) upgrade, add symbols, gifts, & **custom snippets**, to your Rocket shortcuts.
  * Add phone numbers, custom texts, email starters for a powerful experience!

### Magnet - $5
  * Download: [Magnet on the Mac App Store](https://apps.apple.com/app/id441258766?mt=12)
  * Price: $5
  * My Review: 5/5; well worth the price!
  * **Magnet** is a fantastic window manager for Macs!
  * Recommendations:
    * Get this app via Mac App Store & share it with your family via iCloud!
  * I use the following shortcuts to move windows between three monitors:

| Magnet Preferences | Shortcut                           |
| ------------------ | ---------------------------------- |
| Left               | `OPTION ⌥` + `SHIFT ⇧` + `[`       |
| Right              | `OPTION ⌥` + `SHIFT ⇧` + `]`       |
| Up                 | `OPTION ⌥` + `SHIFT ⇧` + `↑`       |
| Up                 | `OPTION ⌥` + `SHIFT ⇧` + `↓`       |
| Next Display       | `OPTION ⌥` + `SHIFT ⇧` + `\`       |
| Previous Display   | `OPTION ⌥` + `SHIFT ⇧` + `Enter ↵` |
| Maximize           | `OPTION ⌥` + `SHIFT ⇧` + `A`       |

## Mac Development Setup

### Xcode x Terminal
  * To Install Xcode for the Terminal: `xcode-select --install`
  * To update:
    * `softwareupdate --all --install`
    * `softwareupdate --all --install --force`

### Terminal Custom Setup
  * Background Hex: `#630436`
  * Text Hex: `#FFFFFF`
  * Font: MesloLGS NF Regular 15
    * `brew tap homebrew/cask-fonts`
    * `brew install --cask font-hack-nerd-font`
  * Selection Hex: `#00C9C1`

### Setting up [romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k) for your Terminal
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

### `brew`
  * Homebrew or `brew` is a package manager for MacOS. [brew.sh](https://brew.sh/)  
  * It is helpful to manage packages like font-fira-code, git, python, or node.

#### Useful Commands

| Function                          | Command                    |
| --------------------------------- | -------------------------- |
| Install a package                 | `brew install <formula>`   |
| Uninstall a package               | `brew uninstall <formula>` |
| List all the installed formulae   | `brew list`                |
| Update Homebrew & packages        | `brew update`              |
| Display the Homebrew version      | `brew --version`           |
| Check for potential system issues | `brew doctor`              |

#### Useful Packages

| Package                                                         | brew                                    | Note                               |
| --------------------------------------------------------------- | --------------------------------------- | ---------------------------------- |
| [Node.js](https://nodejs.org/en/)                               | `brew install node`                     | JavaScript server environment      |
| [Git](https://git-scm.com/)                                     | `brew install git`                      | distributed version control system |
| [Pandoc](https://pandoc.org/)                                   | `brew install pandoc`                   | Markdown ↔︎ Word Docx               |
| [ryanoasis/nerd-fonts](https://github.com/ryanoasis/nerd-fonts) | `brew tap homebrew/cask-fonts`<br>`brew install --cask font-hack-nerd-font` | Fonts including Fira Code & MesloLGS NF |
| [tonsky/FiraCode](https://github.com/tonsky/FiraCode)           | `brew cask install font-fira-code`      | Great font for coding              |
