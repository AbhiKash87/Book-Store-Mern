import express from "express";
import Book from "../models/bookModel.js";

const bookRouter = express.Router();



//Router for save a book
bookRouter.post('/',async (req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear ){
            return res.status(400).send('send all required fields: title,author,publishYear')
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }

        const book = await Book.create(newBook);
        return res.status(201).send(book);

    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({message:err.message})
    }
})

// Route to get all books from database
bookRouter.get('/',async (req,res)=>{
    try{

        console.log("i got get all book request ");
        const BookList = await Book.find({});

        res.status(200).send({
            count: BookList.length,
            Data: BookList
        })
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({message:err.message})
    }

})

// Route to get one books from database using bookid
bookRouter.get('/:Id', async (req, res) => {
    try {
        const bookId = req.params.Id;
       
        const book = await Book.findById(bookId);

        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).send({ message: 'Book not found' });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send({message:err.message})
    }
});

//Router for update a book
bookRouter.put('/:Id', async (req,res)=>{
    
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear ){
            return res.status(400).send('send all required fields: title,author,publishYear')
            console.log("no problem till here");
        }

        const {Id} = req.params;

        const newBook = await Book.findByIdAndUpdate(Id,req.body)
        
        if(!newBook){
            return res.status(404).send({message: 'Book not found'});
        }
        
        return res.status(200).send({message: 'Book updated successfully'});
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({message:err.message})
    }
});

//Router to delete a book
bookRouter.delete('/:Id', async (req,res)=>{

    try{
        

        const {Id} = req.params;

        const result = await Book.findByIdAndDelete(Id)

        if(!result){
            return res.status(404).json({message: 'Book not found'});
        }

        return res.status(200).send({message: 'Book deleted successfully'});
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({message:err.message})
    }
});


export default bookRouter;