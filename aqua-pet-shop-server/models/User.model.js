const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    username: { type: String, required: true},
    email: { type: String, required: [true, 'Email is required.'], unique: true, lowercase: true, trim: true },
    password: { type: String, required: [true, 'Password is required.'],
    address: { type: String, required: true},
    zipCode: { type: String, required: true},
    city: { type: String, required: true},
    country: { type: String, required: true},
    imgURL: { type: String, required: true}, 
    ordersId: [ { type: Schema.Types.ObjectId, ref: 'Order' } ],
    isAdmin: {type: Boolean, default: false },

    }
  },
  {  
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
