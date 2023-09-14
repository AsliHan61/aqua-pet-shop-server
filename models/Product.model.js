const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, enum: ['Fish', 'Aquarium', 'Food', 'Accessories'], required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    description: {type: String , required:true},
    imgURL: {type: String, required: true},
    rating: {type: Number,
        validate: {
          validator: function(value) {
            return value > 0 && value <= 5;
          },
          message: 'Please, rate between 1 and 5.'
        },
        required: true},
    adminId: { type: Schema.Types.ObjectId, ref: 'User' },
    
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;