const express = require('express'),
    app = express(),
    listenPort = 3001;

app.use(express.static(__dirname+'/static'));


app.listen(listenPort, function () {
    console.log(`Request Server is listening on port ${listenPort}`);
});