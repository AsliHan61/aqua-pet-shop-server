const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const OrderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    purchase: [ { type: Schema.Types.ObjectId, ref: 'Product' } ],
    date: {type: Date, required: true},
    description: {type: String , required:true},   
    
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;