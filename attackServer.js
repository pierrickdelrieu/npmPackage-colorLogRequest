// const http = require('http'); 

// const host = "127.0.0.1";
// const port = 2222;


// const server = http.createServer((req, res) => {
//     const chunks = [];
//     req.on("data", (chunk) => {
//         chunks.push(chunk);
//     });
//     req.on("end", () => {
//         const data = Buffer.concat(chunks);
//         console.log("New sensitive request: ", JSON.parse(data.toString()));        
//         res.end();
//     });
// })

// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });