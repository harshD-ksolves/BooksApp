const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    authors: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    published: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
},{
    timestamps: true  
});

module.exports=mongoose.model("Book",BookSchema);