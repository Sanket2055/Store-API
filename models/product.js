const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , 'Product name is required'],
    },
    price: {
        type: Number,
        required: [true , 'Product price is required'],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 3,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type:String,
        enum:{
            values:['ikea' , 'liddy' , 'caressa' , 'marcos'],
            message: '{VALUE} is not a valid company'
        }
        // enum:['ikea' , 'liddy' , 'caressa' , 'marcos']
    }
});

module.exports = mongoose.model('Product', productSchema);

