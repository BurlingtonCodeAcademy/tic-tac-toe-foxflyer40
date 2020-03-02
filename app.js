const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000 

app.use(express.static('public')) //bind to public folder

 // set path to About page more specific
app.get('/about', (request, response) => {
      response.sendFile(path.resolve('./public/about.html'))
})

//less specific error catch all
app.get('*', (req,res) => {
      res.status(404);
      res.sendFile(path.resolve('./public/404.html'))
      })


app.listen(PORT, () => {console.log(`Running port: ${PORT}`)})