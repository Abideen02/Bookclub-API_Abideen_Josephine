import express from "express";
import { addBook, viewBook, viewAllBooks, updateBook, deleteBook } from '../controllers/booksController.js'
import { authenticate } from '../middlewares/auth.js';

const booksRouter = express.Router();

//Add a Book
booksRouter.post("/", authenticate, addBook);

//View a Book Books/:id
booksRouter.get("/:id", authenticate, viewBook);

//View all books bookss/
booksRouter.get("/", authenticate, viewAllBooks);

//Update book book/
booksRouter.put("/", authenticate, updateBook);

//Delete a book books/:id
booksRouter.delete("/:id", authenticate, deleteBook);

export default booksRouter;