require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3005











app.get('/',(req,res) => {
    res.send('hello from server')
})

app.listen(PORT,() => {
    console.log(`listening at port : ${PORT}`)
})