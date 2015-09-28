RingCentral CTI Demo for JavaScript
===================================

## Overview

This is a demo that showcases various [Call Telephony Integration (CTI)](https://en.wikipedia.org/wiki/Computer_telephony_integration) use cases for the RingCentral Connect Platform. The demo runs as a set of HTML5 static webpages that can on a server or locally.

The demo showcases the following use cases:

1. Authorization via 3-Legged OAuth 2.0
1. [Click-to-Call](https://en.wikipedia.org/wiki/Click-to-call)
1. [Inbound Screen Pop](https://en.wikipedia.org/wiki/Screen_pop)
1. Call Log Retrieval
1. Call Recording Retrieval and Playback
1. SMS

[View Screenshot](https://raw.githubusercontent.com/grokify/ringcentral-cti-demo-js/master/src/images/cti-demo.png)

[View Live Demo](http://grokify.github.io/cti-demo/)

## Getting Started

The full installation instructions are included as an HTML file in the demo itself. You can view the [full installation instructions on the live demo](http://grokify.github.io/cti-demo/instructions.html).

Since this runs live on GitHub Pages, you can run this demo without any server-side installation, though it may be worthwhile to install the RingCentral for Desktop softphone as described in the instructions.

You can also run this demo on any webserver by adding the `src` directory to the server's html directory. This may be useful if you wish to edit the pages. There is no need to run a database as the demo stores all necessary data using HTML5 Local Storage (e.g. `window.localStorage`). Instructions are provided below for Node.js http-server as one easy approach for this.

### Dependencies

Aside for the RingCentral for Desktop softphone, all dependencies are either built-in to the demo repo or accessed online via CDNs. There is no need to separately install depdencies such as JavaScript and CSS files.

### Using Node.js http-server

You can run this demo using any server that can host static webpages, including GitHub pages.

Using Node.js and `http-server` ([NPM package](https://www.npmjs.com/package/http-server)) is presented as one easy to use option.

#### Pre-reqs

Install NPM globally:

```
$ curl https://npmjs.org/install.sh | sh
```

Install `http-server` globally so it cna be run from the command line.

```
$ npm install http-server -g
```

Install and run demo.

```bash
$ git clone https://github.com/grokify/ringcentral-cti-demo-js
$ http-server ringcentral-cti-demo-js/src
```

Navigate Google Chrome to the location sepcified by `http-server`, e.g.

```
http://localhost:8080
```

## Customization

### Syntax Highlighting

This demo uses [highlight.js](https://highlightjs.org/) for syntax highlighting. The CSS style files are located in the [GitHub repo](https://github.com/isagalaev/highlight.js/tree/master/src/styles). To choose any style, simply copy the desired style CSS file to the project's `css/highlight.css` location.

## Links

Project Repo

* https://github.com/grokify/ringcentral-cti-demo-js

RingCentral SDK for JavaScript

* https://github.com/ringcentral/js-sdk

RingCentral API Docs

* https://developers.ringcentral.com/library.html

RingCentral API Explorer

* http://ringcentral.github.io/api-explorer

## Contributions

Any reports of problems, comments or suggestions are most welcome.

Please report these on [GitHub](https://github.com/grokify/ringcentral-cti-demo-js)

## License

RingCentral SDK is available under an MIT-style license. See [LICENSE.txt](LICENSE.txt) for details.

RingCentral SDK &copy; 2015 by John Wang