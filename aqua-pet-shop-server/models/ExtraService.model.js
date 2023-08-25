const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ExtraServiceSchema = new Schema({
    name: {type: String, required: true},
    type: {enum: ['Cleaner', 'Installation', 'Maintenance'], required: true},
    price: {type: Number, required: true},
    description: {type: [] , required:true},
    imgURL: {type: String, required: true},
    rating: {type: Number,
        validate: {
          validator: function(value) {
            return value < 0 && value > 5;
          },
          message: 'Please, rate between 0 and 5.'
        },
        required: true},
    
       
    
});

const ExtraService = mongoose.model('ExtraService', ExtraServiceSchema);

module.exports = ExtraService;