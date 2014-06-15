# Welcome to QuickBoot

Created by [Paulo Elias](https://twitter.com/pauloelias)

---

## Table of Contents

1. [Overview](#overview)
2. [Project Setup](#project-setup)
3. [Notes](#notes)
4. [Gulp Tasks](#tasks)
5. [To Do](#todo)

---

## <a name="overview"></a> Overview

QuickBoot is a frontend scaffold.

---

## <a name="project-setup"></a> Project Setup

* Install Node
    * [Node.js Installer](http://nodejs.org/)
* Install the Gulp
    * ```npm install -g gulp```
    * You might need to ```sudo``` E.G. ```sudo npm install -g gulp```
* Clone and cd into the repo
    * ```git clone https://github.com/QuickPixel/quickboot.git && cd quickboot```
* Install [Bundler](http://bundler.io/)
  * ```gem install bundler```
* Install ruby gems
    * ```bundle install```
* Install node modules and bower dependencies
    * ```npm install```
* Usage
  * Create project skeleton before you start: ```gulp skeleton```
  * Clean project: ```gulp clean```
  * Watch and start local server: ```gulp watch``` and visit [http://localhost:8080/](http://localhost:8080/)
  * Build for Production: ```NODE_ENV=production gulp```

---

## <a name="notes"></a> Notes

Project notes.

### [Node Version Manager (NVM)](https://github.com/creationix/nvm) OPTIONAL

NVM is used to manage multiple active node.js versions, similar to RVM (Ruby Version Manager), to help us sandbox our projects (as needed).

* [Learn more about and install NVM](https://github.com/creationix/nvm)

### Node Modules

Node Modules.

### [Ruby Version Manager (RVM)](https://rvm.io/) OPTIONAL

RVM is a command-line tool that allows you to install, manage, and work with multiple ruby environments and gemsets to help us sandbox our projects (as needed).

* [Learn more and install RVM](https://rvm.io/)

### Ruby Gems

Ruby gems.

### Bower Components

Bower config.

### Static Skeleton Files

Skeleton files.

---

## <a name="tasks"></a> Gulp Tasks

The ```./gulpfile.js``` contains the following tasks:

| Command | Dependencies | Description | Source Location | Distribution Location |
| ------- | ------------ | ----------- | --------------- | ---------------------
| ```gulp``` | clean | Cleans the distribution directory, creates the skeleton, and runs compilation tasks | | |
| ```gulp clean``` | | Cleans the distribution directory | | |
| ```gulp skeleton``` |  | Creates distribution directory and moves static skeleton files into it | ```./compile/skeleton/**``` | ```./public/*``` |
| ```gulp sass``` |  | Compiles SASS files to css then concatenates and minifies them  | ```./compile/scss/**/*.scss``` | ````./public/assets/css/**/*.css``` |
| ```gulp js``` |  | Concatenates and minifies javascript | ```./compile/js/app/main.js``` | ```./public/assets/js/main.js``` |
| ```gulp polyfills``` | | Concatenates and minifies polyfills | ```./compile/js/polyfills/polyfills.js``` | ```./public/assets/js/polyfills.js``` |
| ```gulp jade``` |  | Compiles jade files to html | ```./compile/jade/**/*.jade``` | ```./public/**/*.html``` |
| ```gulp images``` |  | Optimizes and moves images into the distribution directory | ```./compile/img/**/*``` | ```./public/assets/img/**/*``` |
| ```gulp server``` | | Starts the local server with Live Reload enabled | | |
| ```gulp watch``` | server | Watches changes to files and triggers LiveReload | | |

---

## <a name="todo"></a> To Do

* Figure out how to only rebuild new or changed files during ```gulp watch```
* Optimize those SVGs
* Refactor and improve