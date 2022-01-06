# Notes from Mosh's Docker Tutorial

[Docker Tutorial for Beginners [2021] - YouTube](https://youtu.be/pTFZFxd4hOI)

<!-- markdownlint-disable MD007 -->
1. [What is Docker?](#what-is-docker)
  1. [Virtual Machines (VMs) vs Containers](#virtual-machines-vms-vs-containers)
  2. [Docker Architecture](#docker-architecture)
2. [Development Flow](#development-flow)
  1. [Development Flow Example](#development-flow-example)
3. [Additional Vocab](#additional-vocab)
  1. [Kernel](#kernel)
  2. [Dockerfile](#dockerfile)
  3. [Image](#image)
  4. [Container](#container)
4. [Docker Commands](#docker-commands)
<!-- markdownlint-enable MD007 -->

## What is Docker?

  * Docker is a platform for building, running, & shipping apps
  * Docker acts as a buffer between the App's environment & local machine
  * i.e., provides **consistently**
  * Container = Isolated environment for each app
    * Contains Config Files, Dependencies, etc.
    * Containers are easy to create & delete since they are isolated!

### Virtual Machines (VMs) vs Containers

  * Containers = isolated environment for running an App
    * Containers are more lightweight since they use the host's OS (specifically the host's kernel)
  * VMs = recreates a whole *machine* (OS, license, etc.)
    * VMs consumes more resources

### Docker Architecture

  * Docker's Type: Client-Server Architecture
  * Client -> {REST API} -> Server(Docker Engine)
  * Docker Engine creates & manages the containers
  * Containers are *special* processes running on the host OS
    * Special b/c Contai ners contain their own **file system**
  * Containers uses the host's kernel
    * Windows -> Docker can run Windows & Linux Containers
    * Linux -> Docker can run Linux Containers
    * Mac -> Docker runs Linux VM that runs Linux Containers

## Development Flow

  * Docker-ize an App? -> Add a **Dockerfile** to the App
  * Dockerfile + App -> Image
  * Tell Docker to start a Container using the Image
  * Upload Images to [Docker Hub](https://hub.docker.com/)
    * Registry for Docker Images (similar to GitHub)

### Development Flow Example

Instructions for Docker -> Dockerfile
  1. Start with an OS
  2. Install Node
  3. Copy app.js
  4. Run node app.js

---

## Additional Vocab

### Kernel
  * manages Apps & hardware resources
  * Inside OS

### Dockerfile
  * plaintext file
  * Instructions for Docker to package the App into an **Image**

### Image
  * Contains everything the App needs to run
  * Includes
    * Cut-down OS
    * runtime environment (eg. Node)
    * Application files
    * 3rd party libraries
    * Environment variables

### Container
  * Containers are *special* processes running on the host OS
    * Special b/c Containers contain their own **file system**
  * Isolated environment for each app
    * Includes Config Files, Dependencies, etc.
    * Easy to create & delete
  * Containers uses the host's kernel
    * Windows -> Docker can run Windows & Linux Containers
    * Linux -> Docker can run Linux Containers
    * Mac -> Docker runs Linux VM that runs Linux Containers


---

## Docker Commands

