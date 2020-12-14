// Referencing/import Mongoose
import monogoose from 'mongoose'

// 2. Define the Schema
//This is a userSchema and Schema defines document properties through an object.
// where the key name or propety corresponds to the property name in the collection.
const userSchema = monogoose.Schema({
  // Define property's here
  name: {
    type: String, 
    required: true 
  },
  email: {
    type: String, 
    required: true,
    // we set the email to unique because we dont want users with same email address
    unique: true 
  },
  password: {
    type: String, 
    required: true 
  },
  isAdmin: {
    type: Boolean, 
    required: true,
    default: false 
  },
}, {
  timestamps: true
})

const User = monogoose.model('User', userSchema)

export default User