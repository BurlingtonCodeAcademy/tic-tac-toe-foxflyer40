const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000 

app.use(express.static('public')) //bind to public folder



app.listen(PORT, () => {console.log(`Running port: ${PORT}`)})