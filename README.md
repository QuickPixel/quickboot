# QuickBoot, a frontend scaffold

Created by [Paulo Elias](https://twitter.com/pauloelias)

**Please bear with me as I consolidate, update, and revise this documentation and core SASS files**

---

## Table of Contents

1. [Project Overview](#overview)
2. [Detailed Documentation](documentation)
3. [Project Setup](#project-setup)
    1. [Frontend](#frontend)
    2. [Application/Backend](#backend)
4. [Configuration](#configuration)
5. [Notes](#notes)
6. [To Do](#todo)
7. [Credits](#credits)

---

## <a name="overview"></a> Project Overview

QuickBoot is a frontend scaffold that uses [gulp.js](http://gulpjs.com/) to process, build, and optimize frontend assets. It is configured with the following as defaults:

* [SASS](http://sass-lang.com/)
* [Compass](http://compass-style.org/)
* [Jade](http://jade-lang.com/)
* [Bower](http://bower.io/)

---

## <a name="documentation"></a> Detailed Documentation

Detailed documentation can be found at:

* [Frontend Documentation](./docs/frontend.md)
* [Developer Documentation](./docs/developer.md)
* [Upgrade Log](./docs/upgrade_log.md)
* [Change Log](./docs/change_log.md)

---

## <a name="project-setup"></a> Project Setup

### <a name="frontend"></a> Frontend

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

More details, including a full task list, can be found in the [Frontend Documentation](./docs/frontend.md)

### <a name="backend"></a> Application/Backend

This is just a placeholder for now. Helpful for maintenance when you handoff or need to maintain a CMS/web app.

Full developer documentation can be found in the [Developer Documentation](./docs/developer.md)

---

## <a name="configuration"></a> Configuration

### Frontend Configuration

Detailed frontend configuration documentation can be found in [Frontend Documentation](./docs/frontend.md#configuration)

### Backend Configuration

Detailed backend configuration documentation can be found in [Developer Documentation](./docs/developer#configuration)

## <a name="notes"></a> Notes

### Frontend Workflow

Detailed frontend workflow documentation can be found in [Frontend Documentation](./docs/frontend.md#workflow)

### [Node Version Manager (NVM)](https://github.com/creationix/nvm) OPTIONAL

NVM is used to manage multiple active node.js versions, similar to RVM (Ruby Version Manager), to help us sandbox our projects (as needed). [Learn more about NVM](https://github.com/creationix/nvm)

### Node Modules

Specifics regarding the Node and Gulp modules used in this project are detailed in [Frontend Documentation](./docs/frontend.md#node-modules)

### [Ruby Version Manager (RVM)](https://rvm.io/) OPTIONAL

RVM is a command-line tool that allows you to install, manage, and work with multiple ruby environments and gemsets to help us sandbox our projects (as needed). [Learn more about RVM](https://rvm.io/)

### Ruby Gems

Specifics about the Ruby Gems used in this project can be found in [Frontend Documentation](./docs/frontend.md#gems)

### Bower Components

Information regarding how Bower is configured and its components for this project are found in [Frontend Documentation](./docs/frontend.md#bower)

---

## <a name="todo"></a> To Do

* **Documentation** Finish this damn documentation!
* Figure out how to only rebuild new/changed files during ```gulp watch```
* Create SVG sprites using [Gulp SVG Sprites](https://github.com/shakyShane/gulp-svg-sprites)
* Refactor and improve gulp.js file
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