require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.HOST_PORT;
const domain = process.env.HOST_DOMAIN;

app.use(express.static("public"));

const post = require('./routers/post.js');
app.use('/post', post);

app.get("/", (req, res) => {
    res.send("Server del mio Blog");
});

app.listen(port, () => {
    console.log(`Server online all'indirizzo: ${domain}:${port}`);
});