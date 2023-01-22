// const http = require('http');
require('dotenv').config();
const PORT = 8080;
const DB_URI = "mongodb://127.0.0.1:27017/mern";
const express = require('express');
const mongoose = require('mongoose');

// const server = http.createServer((req, res) => {
//     // if (req.url === '/status') {
//     //     const serverInfo = {
//     //         serverName: "CodeSandBox Server",
//     //         version: "1.0.0",
//     //         currentDate: new Date().toDateString(),
//     //         currentTime: new Date().toTimeString(),
//     //     };
//     //     res.writeHead(200, { "Content-Type": "application/json" })
//     //     res.write(JSON.stringify(serverInfo)); //Stringify the response
//     //     res.end();
//     // } else if (req.url === "/video") {
//     //     res.writeHead(200, { "Content-Type": "text/html" })
//     //     res.write("<h1>Videos not present</h1>"); //Stringify the response
//     //     res.end();
//     // } else {
//     //     res.writeHead(200, { "Content-Type": "text/html" })
//     //     res.write("<h1>Hello from server</h1>"); //Stringify the response
//     //     res.end();
//     // }
//     const splitURL = req.url.split('/');
//     const symbol = splitURL[splitURL.length - 1];
//     switch (req.url) {
//         case "/": {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.write("<h1>Currency Database</h1>");
//             res.end();
//             break;
//         }
//         case "/currencies": {
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.write(JSON.stringify(data));
//             res.end();
//             break;
//         }
//         case `/currencies/${symbol}`: {
//             const result = data.find(elem => elem.id.toLowerCase() === symbol.toLowerCase())
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.write(JSON.stringify(result));
//             res.end();
//             break;
//         }
//         default: {
//             res.writeHead(404);
//             res.write('Route not found!');
//             res.end();
//         }
//     }
// });


// server.listen(PORT, () => {
//     console.log(`Server is now running successfully on Port ${PORT}`)
// })

const app = express();

app.use(express.json())

// app.get("/", (req, res) => {
//     console.log('Current Route: /');
//     res.send('All Good!')
// })

// app.get("/status", (req, res) => {
//     const serverInfo = {
//         serverName: "CodeSandBox Server",
//         version: "1.0.0",
//         currentDate: new Date().toDateString(),
//         currentTime: new Date().toTimeString(),
//     };
//     res.json(serverInfo);
// })

const currencyRoutes = require('./routes/currencies.routes');
const userRoutes = require('./routes/users.routes');
const blogRoutes = require('./routes/blogs.routes');
const { verifyAuth } = require('./middleware/verifyAuth');

mongoose
    .connect(DB_URI)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('Error in connecting DB', error))

app.use(verifyAuth);

app.use('/api/currencies', currencyRoutes);
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`))
