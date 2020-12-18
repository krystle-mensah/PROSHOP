// bring in express with require function in express. this common js synex
import express from 'express'
import dotenv  from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

// here we inlise express in app
const app =  express();

app.get('/', (req,res) => {
  res.send('API is running...')
})

//This App should use this file for routing products
app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000 

//Then we take app and listen on port 5000 
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)
