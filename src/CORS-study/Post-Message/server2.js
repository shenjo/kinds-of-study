const express = require('express'),
    app = express(),
    listenPort = 3002;

app.use(express.static(__dirname+'/static2'));


app.listen(listenPort, function () {
    console.log(`Request Server is listening on port ${listenPort}`);
});