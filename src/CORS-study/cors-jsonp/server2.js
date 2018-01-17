const express = require('express'),
    app = express(),
    listenPort = 3002;

app.route('/')
    .get((req,res)=>{
        // res.set('Access-Control-Allow-Origin', 'http://localhost:3003');
        res.send("get Hello world!");
    })
    .post((req,res)=>{
        // res.set('Access-Control-Allow-Origin', 'http://localhost:3003');
        res.send("post Hello world!");
    });

app.route('/jsonp')
    .get((req,res)=>{
        const callbackName = req.query.callback;
        res.send(callbackName+"({'message': 'hello world from JSONP!'});");
        // res.send(`${callbackName}({'message': 'hello world from JSONP!'});`);
    })




app.listen(listenPort, function () {
    console.log(`Response Server is listening on port ${listenPort}`);
});