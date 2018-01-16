const express = require('express'),
    app = express(),
    listenPort = 3001;

app.route('/')
    .get((req,res)=>{
        // res.set('Access-Control-Allow-Origin', 'http://localhost:3003');
        res.send("get Hello world!");
    })
    .post((req,res)=>{
        // res.set('Access-Control-Allow-Origin', 'http://localhost:3003');
        res.send("post Hello world!");
    });




app.listen(listenPort, function () {
    console.log(`Response Server is listening on port ${listenPort}`);
});