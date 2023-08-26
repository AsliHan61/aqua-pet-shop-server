const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },

    userName:{
      type: String,
      required: [true, 'Username is required.']
    },

    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: [true, 'Password is required.']
    },

    address: {
      type: String,
    },

    zipCode: {
      type: String,
    },
    
    city: {
      type: String,
    },
    
    country: {
      type: String,
    },

    imageUrl: {
      type: String,
    } ,

    ordersId: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
