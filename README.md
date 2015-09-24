RingCentral CTI Demo for JavaScript
===================================

## Overview

This is a demo that showcases various [Call Telephony Integration (CTI)](https://en.wikipedia.org/wiki/Computer_telephony_integration) use cases for the RingCentral Connect Platform. The demo runs as a set of HTML5 static webpages that can on a server or locally.

The demo showcases the following use cases:

1. Authorization
1. [Click-to-Call](https://en.wikipedia.org/wiki/Click-to-call)
1. [Inbound Screen Pop](https://en.wikipedia.org/wiki/Screen_pop)
1. Call Log Retrieval
1. Call Recording Retrieval and Playback
1. SMS

[View Screenshot](https://raw.githubusercontent.com/grokify/ringcentral-cti-demo-js/master/src/images/cti-demo.png).

## Getting Started

You can run this demo simply by adding the `src` directory to any webserver. There is no need to run a database as the demo stores all necessary data using HTML5 Local Storage (e.g. `window.localStorage`).

### Using Node.js http-server

Using Node.js and `http-server` ([NPM package](https://www.npmjs.com/package/http-server)), you can start a local server using the following:

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

* https://github.com/grokify/ringcentral-sdk-ruby

RingCentral SDK for JavaScript

* https://github.com/ringcentral/js-sdk

RingCentral API Docs

* https://developers.ringcentral.com/library.html

RingCentral API Explorer

* http://ringcentral.github.io/api-explorer

## Contributions

Any reports of problems, comments or suggestions are most welcome.

Please report these on [Github](https://github.com/grokify/ringcentral-sdk-ruby)

## License

RingCentral SDK is available under an MIT-style license. See [LICENSE.txt](LICENSE.txt) for details.

RingCentral SDK &copy; 2015 by John Wang