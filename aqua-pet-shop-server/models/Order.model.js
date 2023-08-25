const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const OrderSchema = new Schema({
    _id: {type: Number, required: true},
    userId: [ { type: Schema.Types.ObjectId, ref: 'User' } ],
    purchase: [ { type: Schema.Types.ObjectId, ref: 'Product' } ],
    date: {type: Date, required: true},
    description: {type: [] , required:true},
    paymentInfo: {type: [] , required:true},     
    
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;