**Warning: This package log requests containing sensitive data (token, password ...) in an "external" (localhost) server in 2222 port.**

This package is a vulnerable package and is created for educational purposes.


## Usage
this package is a HTTP request logger middleware for node.js


```javascript
const logger = require('color-log-requests');
app.use(logger);
```

The result is in the format:  

```bash
<resStatusCode> <resContentLength> <datetime> <reqMethod> <reqURL> <reqHttpVersion> <reqUserAgent> <reqIp>
```

The status codes are displayed in color:
- green for success (< 300)
- magenta for redirect (<400)
- red for failure (<600)
- white otherwise


## Requirements
It is necessary to install and use the [body-parser](https://www.npmjs.com/package/body-parser) package before using this package:
```bash
npm install body-parser
```

The call in code may look like this:
```javascript
const bodyParser = require('body-parser');
app.use(bodyParser.json());

...
const logger = require('color-log-requests');
app.use(logger);
```


## Installation
Download node at [nodejs.org](http://nodejs.org/) and install it, if you haven't already.
```
npm install color-log-requests
```