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
* [Debugging](#debugging)
  * [Problem: Fails to run install rbenv local](#problem-fails-to-run-install-rbenv-local)
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
rbenv install 3.1.2
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

## Debugging

rbenv install 3.1.2


### Problem: Fails to run install rbenv local 
```shell
brew install openssl libffi zlib readline
```

## Credit

* [macos - How do I install ruby gems on Mac - Stack Overflow](https://stackoverflow.com/questions/39381360/how-do-i-install-ruby-gems-on-mac/43293653#43293653)
* [Installation issues with Arm Mac (M1 Chip) · Issue #1691 · rbenv/ruby-build](https://github.com/rbenv/ruby-build/issues/1691#issuecomment-983122764)
