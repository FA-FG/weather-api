const express = require('express')

const app = express()

const PORT = 4000
app.use(express.urlencoded({ extended: true }));




const apiCtr = require('./controllers/api')
app.use('/', apiCtr)




app.listen(PORT,() =>{
  console.log(`connecting to port ${PORT}`)
})

