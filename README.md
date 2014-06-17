# QuickBoot, a frontend scaffold

Created by [Paulo Elias](https://twitter.com/pauloelias)

**Please bear with me as I consolidate, update, and revise this documentation and core SASS files**

---

## Table of Contents

1. [Project Overview](#overview)
2. [Project Setup](#project-setup)
3. [Configuration](#configuration)
4. [Notes](#notes)
5. [To Do](#todo)
6. [Credits](#credits)
7. [Changelog](./changelog.md)

---

## <a name="overview"></a> Project Overview

QuickBoot is a frontend scaffold that uses [gulp.js](http://gulpjs.com/) to process, build, and optimize frontend assets. It is configured with the following as defaults:

* [SASS](http://sass-lang.com/)
* [Compass](http://compass-style.org/)
* [Jade](http://jade-lang.com/)
* [Bower](http://bower.io/)

---

## <a name="project-setup"></a> Project Setup

* Change the **project name** (currently quickboot) in ```.ruby-gemset```. Close and reopen the terminal window.
* Change the **project name** and **project details** in ```package.json``
* Install Node
    * [Node.js Installer](http://nodejs.org/)
* Install Gulp globally
    * ```npm install -g gulp```
    * You might need to ```sudo``` to install gulp globally E.G. ```sudo npm install -g gulp```
* Clone and cd into the repo
    * ```git clone https://github.com/QuickPixel/quickboot.git && cd quickboot```
* Install [Bundler](http://bundler.io/)
	*  ```gem install bundler```
* Install ruby gems and  deepndencies
    * ```bundle install```
* Install node modules and bower dependencies
    * ```npm install````
* Build your project ```gulp```
* Watch project assets with Gulp and start local development server
	* ```gulp watch```
	* Then visit [http://localhost:8080/](http://localhost:8080/) in your web browser
* Additional gulp tasks
  * Create project skeleton: ```gulp skeleton```
  * Clean project distribution directory (./public): ```gulp clean```
  * Build for Production to minify and optimize assets: ```NODE_ENV=production gulp```

## <a name="configuration"></a> Configuration

TBD.

---

## <a name="notes"></a> Notes

### Frontend Workflow

Detailed frontend workflow documentation will be found here.

### [Node Version Manager (NVM)](https://github.com/creationix/nvm) OPTIONAL

NVM is used to manage multiple active node.js versions, similar to RVM (Ruby Version Manager), to help us sandbox our projects (as needed). [Learn more about NVM](https://github.com/creationix/nvm)

### Node Modules

Specifics regarding the Node and Gulp modules used in this project will be detailed here.

### [Ruby Version Manager (RVM)](https://rvm.io/) OPTIONAL

RVM is a command-line tool that allows you to install, manage, and work with multiple ruby environments and gemsets to help us sandbox our projects (as needed). [Learn more about RVM](https://rvm.io/)

### Ruby Gems

Specifics about the Ruby Gems used in this project will be found here.

### Bower Components

Information regarding how Bower is configured and its components for this project will be found here.

---

## <a name="todo"></a> To Do

* **Documentation** Finish this damn documentation!
* Refactor and improve gulp.js file... too many weird path vars right now
* Figure out how to only rebuild new/changed files during ```gulp watch```
* Possibly improve file watching with [gulp-watch](https://github.com/floatdrop/gulp-watch)
* Create SVG sprites using [Gulp SVG Sprites](https://github.com/shakyShane/gulp-svg-sprites)
* Replace [Compass Spriting](http://compass-style.org/help/tutorials/spriting/) with [css-sprite](https://github.com/aslansky/css-sprite)
* [FE performnace improvements and optimizations](http://yeoman.io/blog/performance-optimization.html)
	* [gulp-uncss](https://github.com/ben-eb/gulp-uncss)
	* Possibly convert images to [WebP](https://github.com/sindresorhus/gulp-webp)
	 * [Automatically build gulp.src() of bower packages main files](https://github.com/ck86/gulp-bower-files)
	 * Compress assets using [gulp-zopfli](https://github.com/romeovs/gulp-zopfli) or [gulp-zip](https://github.com/sindresorhus/gulp-zip)

---

## <a name="credits"></a> Credits

* [Matt Fordham](http://www.matthewfordham.com/) and the guys at [WNTR](http://www.wintr.us/)
	* [gulp-frontend-scaffold](https://github.com/WINTR/gulp-frontend-scaffold/)
	* [grunt-frontend-scaffold](https://github.com/WINTR/grunt-frontend-scaffold)
* [Jake Chapman](http://imjakechapman.com/)
	* [CraftCMS Boilerplate](https://github.com/imjakechapman/CraftCMS-Boilerplate)
* [Jon Thomas](https://github.com/wjthomas9)