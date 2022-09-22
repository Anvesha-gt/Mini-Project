// importing express module
const express = require('express');
// importing  express module then given a path Absolute  path Or Relative path 
const userRouter = require('./routers/userRouter')
const SubscriberRouter = require('./routers/SubscriberRouter')
const utilRouter = require('./routers/util')

// const videoRouter = require('./routers/videoRouter')
const cors = require('cors');
// initializing express app
const app = express();

const port = 5000;

// JavaScript Object Notation
app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000', 'http://127.0.0.1:5500']
}))
// Hotel(midleware)
app.use('/user', userRouter);
app.use('/subscriber', SubscriberRouter);
app.use('/util', utilRouter);

// app.use('/video',videoRouter);

// route or endpoint
app.get('/', (req, res) => {
    res.send('response from express');
})

app.get('/home', (req, res) => {
    res.send('response from home');
})

app.use(express.static('./static/resources'));

// starting the server
app.listen( port,() => {
    console.log('express server started...');
});
