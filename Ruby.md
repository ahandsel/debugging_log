# Instal Ruby on MacOS with Version Manger

## Outline <!-- omit in toc -->
* [brew install rbenv](#brew-install-rbenv)
* [Setup Paths](#setup-paths)
  * [bash](#bash)
  * [zsh](#zsh)
* [Commands](#commands)
  * [list all available versions](#list-all-available-versions)
  * [install a Ruby version](#install-a-ruby-version)
  * [set ruby version for a specific dir](#set-ruby-version-for-a-specific-dir)
  * [set ruby version globally](#set-ruby-version-globally)
* [Credit](#credit)

## brew install [rbenv](https://github.com/rbenv/rbenv)

```shell
brew install rbenv ruby-build
```

## Setup Paths

### bash

```shell
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile  
```

### zsh

```shell
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zprofile
echo 'eval "$(rbenv init -)"' >> ~/.zprofile  
```

## Commands
### list all available versions

```shell
rbenv install -l
```

### install a Ruby version

```shell

rbenv install 2.4.1
```

### set ruby version for a specific dir

```shell
rbenv local 2.4.1
```

### set ruby version globally

```shell
rbenv global 2.4.1

rbenv rehash
gem update --system
```

## Credit

[macos - How do I install ruby gems on Mac - Stack Overflow](https://stackoverflow.com/questions/39381360/how-do-i-install-ruby-gems-on-mac/43293653#43293653)
