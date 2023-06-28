const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    description: {
        type: String,
        required : true,
    },

    richDescription: {
        type: String,
        dafault : '',
    },
    image: {
        type: String,
        dafault : '',
    },
    images: {
        type: String,
        dafault : [{
            type: String
        }],
    },
    brand: {
        type: String,
        dafault : '',
    },

    price: {
        type: Number,
        default : 0,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        dafault : 0,
        ref : 'Category'
    },
  
    countInStock: {
        type: Number,
        required: true,
        min:0,
        max: 255
    },
    rating: {
        type: Number,
        default : 0,
    },
    numReviews: {
        type: Number,
        default : 0,
    },

    isFeatured: {
        type: Boolean,
        default : false,
    },

    dateCreated: {
        type: Date,
        default : Date.now,
    },


})

exports.Product = mongoose.model('Product', productSchema);
