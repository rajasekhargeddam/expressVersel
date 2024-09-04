const express = require('express');

const app = express();

const PORT = 3000;

app.get( '/' , ( req , res ) => {
    res.send("welcome to my server");
});

app.listen( PORT , () => {
    console.log(`Sever is up and and running at http//:localhost${PORT}`);
});