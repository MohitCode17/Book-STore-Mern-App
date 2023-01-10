import Book from '../models/bookSchema.js';

export const getAllBooks = async (req, res) => {
    try{
        const books = await Book.find();
        res.status(200).json(books);
    }catch(error){
        res.status(404).json({message: error});
    }
}

export const getBook = async (req, res) => {
    try{
      const book = await Book.findById(req.params.id);
      res.status(200).json(book);
    }catch(error) {
      res.status(404).json({message: error.message})
    }
}

export const createBook = async (req, res) => {
    const bookData = req.body;
    const newBook = new Book(bookData);
    try{
        await newBook.save();
        res.status(201).json(newBook);
    }catch(error){
        res.status(409).json({message: error});
    }
}

export const updateBook = async (req, res) => {
    const id = req.params.id;
    const bookData = req.body;
    try{
        let updatedBook = await Book.findByIdAndUpdate(id, bookData);
        res.status(201).json(updatedBook);
    }catch (error) {
        res.status(404).json({message : error});
    }
}

export const deleteBook = async (req, res) => {
    try{
        const bookId = req.params.id;
        await Book.findByIdAndDelete(bookId);
        res.status(200).json({message: "Book deleted successfully!!"})
    }catch(error){
        res.status(409).json({message: error});
    }
}