const { response } = require('express');
const express = require('express');
var request = require("request");
const app = express();
const port = 5000;
app.get("/", (req,res) => {
    res.send("hello!")
})
app.get("/getWeather", (req,res) => {
    request("https://randomuser.me/api/", function(error, response, body) {
        if (!error && response.statusCode==200) {
            var jsonBody = JSON.parse(body)
            res.send(jsonBody)
        }
    })
})
app.listen(port, () => console.log("listening on port 5000"))