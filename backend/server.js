// bring in express with require function in express. this common js synex
const express = require('express');
const dotenv = require('dotenv')
const products = require('./data/products')

dotenv.config()

// here we inlise express in app
const app =  express();


app.get('/', (req,res) => {
  res.send('API is running...')
})

app.get('/api/products', (req,res) => {
  res.json(products)
})

app.get('/api/products/:id', (req,res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})



const PORT = process.env.PORT || 5000 

//then we take app and listen on port 5000 
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
