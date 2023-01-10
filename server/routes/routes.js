import express from 'express';

import { getAllBooks, createBook, deleteBook, getBook, updateBook } from '../controller/controller.js';
const router = express.Router();


router.get('/all', getAllBooks);
router.get('/:id', getBook);
router.post('/add', createBook);
router.put('/edit/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;