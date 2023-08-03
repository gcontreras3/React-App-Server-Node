const express = require('express');
const app = express();
const port = 3000;
const names = ['Jerry', 'Jeff', 'Jim', 'Johnny'];


app.use(port, (req,res) => {
    try{
        console.log("Server listening on port : 3000")
    }
    catch (error){
        console.log(error)
    }
})
app.get('/users', (req, res) => {
    res.json(names)
})


app.listen(port)