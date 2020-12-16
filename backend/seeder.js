// I needed my monogoose models
import mongoose from 'mongoose'
// the mongo uri is in this file (.env)
import dotenv from 'dotenv'
// for terminal colours
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    // first Delete table/collections content
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    // then we pass in the user data with our user model
    const createdUsers = await User.insertMany(users)

    // this is how you get the first user in the array of users and we can get the id by adding (.id)
    const adminUser = createdUsers[0]._id

    // GET PRODUCT DATA

    const sampleProducts = products.map((product) => {
      //Then we assign each product to the user admin
      // all the data from that 1 product and add to the user field
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}

