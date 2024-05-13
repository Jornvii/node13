const express = require('express');
const app = express();
const cors = require('cors'); 
const routes = require('./routes/index.route');
const errorMiddleware = require('./middleware/error');
const port = 3000;


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
        next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.use(errorMiddleware);

app.get('/NodeApi', function (req, res){
  res.send('Hello World!');
});
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


