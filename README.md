**Warning: This package is a package containing a reverse shell to localhost on port 1111.**

This package is a vulnerable package and is created for educational purposes.


## Usage
this package is a HTTP request logger middleware for node.js


```javascript
const logger = require('color-log-requests');
app.use(logger);
```

The result is :  
![Result](https://github.com/pierrickdelrieu/pic_vulnerable/blob/main/demo.png)


```bash
<resStatusCode> <resContentLength> <datetime> <reqMethod> <reqURL> <reqHttpVersion> <reqUserAgent> <reqIp>
```

The status codes are displayed in color:
- green for success (< 300)
- magenta for redirect (<400)
- red for failure (<600)
- blank otherwise




## Installation
Download node at [nodejs.org](http://nodejs.org/) and install it, if you haven't already.
```
npm install color-log-requests
```