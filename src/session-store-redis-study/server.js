// you should start redis server first.
const express = require('express'),
    app = express(),
    session = require('express-session'),
    RedisStore = require('connect-redis')(session),
    listenPort = 3000;
const options = {
    "host": "127.0.0.1",
    "port": "6379",
    "ttl": 60 * 60 * 24 * 30,   //Session的有效期为30天
};
app.use(express.static(__dirname+'/static'));
app.set('trust proxy', 1)
app.use(session({
    secret: 'joey secret key',
    name:'mySession',
    store: new RedisStore(options),
    resave: false,
    saveUninitialized: true
}));
app.route('/api/fruits').get((req,res)=>{
    console.log(`session id is ${req.sessionID}`)
    res.json(['apple','banana'])
});

app.listen(listenPort, function () {
    console.log(`Request Server is listening on port ${listenPort}`);
});
