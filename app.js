const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

const post = require('./routers/post.js');
app.use('/post', post);

app.get("/", (req, res) => {
    res.send("Server del mio Blog");
});

app.listen(port, () => {
    console.log("Server online sulla porta: " + port);
});