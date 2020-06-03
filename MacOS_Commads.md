# MacOS Commands <!-- omit in toc -->
  * This document is a complication of commands and technical notes regarding MacOS

- [scp command notes & examples](#scp-command-notes--examples)
  - [What is Secure Copy (scp)?](#what-is-secure-copy-scp)
    - [Remote to Local](#remote-to-local)
    - [Local to Remote](#local-to-remote)
    - [Remote to Remote](#remote-to-remote)
    - [scp Performance](#scp-performance)
  - [Error: `bash: scp: command not found` | Fixed :green_check:](#error-bash-scp-command-not-found--fixed-green_check)
- [WindowServer process - MacOS system Process/ Command](#windowserver-process---macos-system-process-command)

---

## scp command notes & examples
* Thank you [michaelminter/scp.md](https://gist.github.com/michaelminter/7377743)
* Example syntax for Secure Copy (scp)

### What is Secure Copy (scp)?
* **scp** command allows for local :left_right_arrow: remote file transfers
  * It uses ssh for data transfer and provides the same authentication and same level of security as ssh.
* ⚡️ Remember to install scp on local & remote machines!
  * `yum install openssh-clients`
  * ⚠️ Error: `-bash: scp: command not found`
  * Solution: Install `openssh-clients` on your remote & local machine!

#### Examples Environment <!-- omit in toc -->
* The examples will use the following environment:
  * Remote host:
    * username: `root`
    * hostname: `10.224.156.228`
  * Local host:
    * username: `student`
    * File location: `~/Download` (it is the same as `/Users/student/Download`)

#### Remote to Local
  * Copy "demo.txt" from a Remote host to the Local host
    * `scp root@10.224.156.228:demo.txt ~/Download`
  * Copy multiple files from the remote host to your current directory on the local host
    * `scp root@10.224.156.228:/root/\{a,b,c\} .`
    * `scp root@10.224.156.228:~/\{foo.txt,bar.txt\} .`

#### Local to Remote
  * Copy "demo.txt" from the local host to a remote host
    * `cd ~/Download` | Assumes "demo.txt" is in the Download folder
    * `scp demo.txt root@10.224.156.228:/root`
  * Copy the directory "AAA" from the local host to a remote host's directory "BBB"
    * `scp -r AAA root@10.224.156.228:/root/BBB`
  * Copying "foo.txt" & "bar.txt" from the local host to the remote host's home directory
    * `scp foo.txt bar.txt root@10.224.156.228:~`
  * Copy "foobar.txt" from the local host to a remote host using port 2264
    * `scp -P 2264 foobar.txt root@10.224.156.228:/root`

#### Remote to Remote
  * Remote_1 -> Remote_2 | Copy the file "foobar.txt" from remote host "rh1.edu" to remote host "rh2.edu"
    * `scp root@rh1.edu:/root/foobar.txt \ root@rh2.edu:/root/`

#### scp Performance
* By default scp uses the Triple-DES cipher to encrypt the data being sent.
* Using the Blowfish cipher has been shown to increase speed.
  * This can be done by using option -c blowfish in the command line.
  * `scp -c blowfish some_file root@10.224.156.228:~`

### Error: `bash: scp: command not found` | Fixed :green_check:
  * Make sure your remote host has also scp!
  * Remote CentOS 6: `yum install openssh-clients`

---

## WindowServer process - MacOS system Process/ Command
  * WindowServer process deals with all the visual side of the desktop, the Dock bar, Menu bar, etc.
  * This process makes the control between the UI (user interface) what the user sees and the hardware part.
  * All folders and files that are on the Desktop, the consequences of transparency from the Dock to te menu bar is the full managed with WindowServer process.
  * [How to Reduce WindowServer CPU and RAM Usage in macOS?](https://osxtips.net/how-to-reduce-windowserver-cpu-and-ram-usage-in-macos/)

---
## `rm` command to delete files & folders
  * Syntax:  rm [options] file ...
  * Options: 
    * `-f`   Attempt to remove the files without prompting for confirmation, regardless of the file's permissions.
    * `-i`   Request confirmation before attempting to remove each file.
    * `-r`   Remove the entire file hierarchy rooted in each file argument. (implies the -d  Delete folders).
### Examples
* Delete `.git` directory: `rm -rf .git`
* Delete all .jpg files in the current folder: `rm *.jpg`
* Delete the folder named "temp", and all its contents: `rm -R temp`
* Delete a protected folder: `sudo rm -r NAME_OF_FOLDER_TO_DELETE`
* Move the file Hunter.txt to the Trash using mv: `$ mv Hunter.txt ~/.Trash`
