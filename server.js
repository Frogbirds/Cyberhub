const express = require("express");

const hbs = require("hbs");

const app = express();

app.set("View engine", "hbs");
hbs.registerPartials( __dirname + "/Views");


app.get("/", (req,res) => {
 res.render("index.hbs")
});



app.get("/om_oss",  (req, res) =>{
    res.render("index.hbs");
});

app.listen(3000);