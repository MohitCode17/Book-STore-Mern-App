import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    author: {
        type: String,
        // required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        // required: true
    },
    available: {
        type: Boolean
    },
    coverImg: {
        type: String,
    }
})

const bookModel = mongoose.model('book', bookSchema);

export default bookModel;