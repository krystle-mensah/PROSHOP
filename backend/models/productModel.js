import monogoose from 'mongoose'

// Individual Review
const reviewsSchema = monogoose.Schema ({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true }
}, {
  timestamps: true 
})

const productSchema = monogoose.Schema(
  // this is the product schema object
  {
  // we create a user here because 
  user: {
    type: monogoose.Schema.Types.ObjectId,
    required: true,
    // this adds a relationship between products and users.
    ref: 'User'
  
  },
  name: {
    type: String, 
    required: true 
  },
  image: {
    type: String, 
    required: true,
  },
  brand: {
    type: String, 
    required: true, 
  },
  category: {
    type: String, 
    required: true,
  },
  description: {
    type: String, 
    required: true,
  },
  reviews: [reviewsSchema], 
  rating: {
    type: Number, 
    required: true,
    default: 0
  },
  numReviews: {
    type: Number, 
    required: true,
    default: 0
  },
  price: {
    type: Number, 
    required: true,
    default: 0
  },
  countInStock: {
    type: Number, 
    required: true,
    default: 0
  },
}, {
  timestamps: true
})

const Product = monogoose.model('Product', productSchema)

export default Product