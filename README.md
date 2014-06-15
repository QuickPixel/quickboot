# Welcome to QuickBoot

Created by [Paulo Elias](https://twitter.com/pauloelias)

---

## Table of Contents

1. [Overview](#overview)
2. [Project Setup](#project-setup)
3. [Notes](#notes)
4. [Gulp Tasks](#tasks)
5. [To Do](#todo)
6. [Credits](#credits)

---

## <a name="overview"></a> Overview

QuickBoot is a frontend scaffold.

---

## <a name="project-setup"></a> Project Setup
* Change the Project name (quickboot) in .ruby-gemset, close and reopen the terminal window.
* Install Node
    * [Node.js Installer](http://nodejs.org/)
* Install the Gulp
    * ```npm install -g gulp```
    * You might need to ```sudo``` E.G. ```sudo npm install -g gulp```
* Clone and cd into the repo
    * ```git clone https://github.com/QuickPixel/quickboot.git && cd quickboot```
* Install [Bundler](http://bundler.io/)
  * ```gem install bundler```
* Install ruby gem deepndencies
    * ```bundle install```
* Install node modules and bower dependencies
    * ```npm install```
* Change the Project Name and details in package.json
* Run ```gulp```
* Alternate usage
  * Create project skeleton: ```gulp skeleton```
  * Clean project distribution directory (./public): ```gulp clean```
  * Watch and start local server: ```gulp watch``` then visit [http://localhost:8080/](http://localhost:8080/)
  * Build for Production to minify and optimize assets: ```NODE_ENV=production gulp```

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
| ```gulp images``` |  | Optimizes and moves images into the distribution directory | ```./compile/img/**/*.{png,gif,jpg,jpeg,ico}``` | ```./public/assets/img/**/*``` |
| ```gulp svgmin``` |  | Optimizes and moves SVGs into the distribution directory | ```./compile/img/**/*.svg``` | ```./public/assets/img/**/*``` |
| ```gulp server``` | | Starts the local server with Live Reload enabled | | |
| ```gulp watch``` | server | Watches changes to files and triggers LiveReload | | |

---

## <a name="todo"></a> To Do

* Figure out how to only rebuild new or changed files during ```gulp watch```
* Optimize those SVGs with [SVG sprites](https://github.com/shakyShane/gulp-svg-sprites)
* Refactor and improve
* Replass [Compass Sprites](http://compass-style.org/help/tutorials/spriting/) with [css-sprite](https://github.com/aslansky/css-sprite)
* [FE performnace improvements and optimizations](http://yeoman.io/blog/performance-optimization.html)
  * [gulp-uncss](https://github.com/ben-eb/gulp-uncss)
  * Possibly convert images to [WebP](https://github.com/sindresorhus/gulp-webp)
  * [Build gulp.src() of bower packages main files](https://github.com/ck86/gulp-bower-files)
  * Compress assets using [gulp-zopfli](https://github.com/romeovs/gulp-zopfli) or [gulp-zip](https://github.com/sindresorhus/gulp-zip)

---

## <a name="credits"></a> Credits

* [Matt Fordham](http://www.matthewfordham.com/) and the guys at [WNTR](http://www.wintr.us/)
  * [gulp-frontend-scaffold](https://github.com/WINTR/gulp-frontend-scaffold/)
  * [grunt-frontend-scaffold](https://github.com/WINTR/grunt-frontend-scaffold)
* [Jake Chapman](http://imjakechapman.com/)
  * [CraftCMS Boilerplate](https://github.com/imjakechapman/CraftCMS-Boilerplate)
* [Jon Thomas](https://github.com/wjthomas9)