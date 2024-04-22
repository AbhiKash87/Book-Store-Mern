import  mongoose from 'mongoose'

// Define the schema for the Book model
const bookSchema =  mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    }
},
{
    timestamps:true
});

// Create the Book model based on the schema
const Book = mongoose.model('Book', bookSchema);
export default Book;

