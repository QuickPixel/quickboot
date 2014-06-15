# Developer Documentation for PROJECT
---

These notes are intended for the developer(s) maintaining the project.

---

## Overview

---

## Version Control

Files for this site are kept in a Git repository. All files are versioned back to original static site preview with the client. Developers check in to BitBucket and we deploy to all non-local environments (development, staging, and production). Ignored files include .htaccess, caches & upload directories. See the ```./.gitignore``` file for the full ignore list.

---

## Server Environments

PROJECT is running in two environments. Local copies are on each independent developer's computer. There is a private Development and a public Production environment.

### Local

* Specific to each developer.
* Developers are encouraged to run the latest stable versions of PHP and MySQL

### Development

* Located at [cli.qp-dev.com](http://cli.qp-dev.com)
* PHP version 5.3.10
* MySQL version 5.5.35
* Apache 2.2.22

### Staging

* Located at [cli.qp-staging.com](http://cli.qp-staging.com)
* PHP version 5.3.10
* MySQL version 5.5.35
* Apache 2.2.22

### Production

* Located at [domain.com](http://domain.com)
* PHP version 5.3.10
* MySQL version 5.5.35
* Apache 2.2.22

---

## Configuration

This site uses gulp.js and bower to manage frontend assets and build.

The configutation files can be found at:

```
bower.json
GemFile
gulpfile.js
package.json
```

Compiled source files are found in:

* ```./public/*```
* ```./public/assets/css/*```
* ```./public/assets/js/*```

---

## 3rd Party Plugins

---

## Deployment

Migrate or script deployment for these files and directories across environments.

* ```./public/*```
