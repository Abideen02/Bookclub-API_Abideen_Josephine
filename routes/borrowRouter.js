import express from "express";
import { createRecords, viewAllRecords, viewRecord, updateborrowingrecord, viewmemberborrowing } from '../controllers/borrowController.js'
import { authenticate } from '../middlewares/auth.js';

const borrowRouter = express.Router();

//Add a record
borrowRouter.post("/", authenticate, createRecords);

//View a record records/:id
borrowRouter.get("/:id", authenticate, viewRecord);

//View all record records/
borrowRouter.get("/", authenticate, viewAllRecords);

//Update borrowing record/
borrowRouter.put("/", authenticate, updateborrowingrecord);

//view member borrowing/:id
borrowRouter.get("/:id", authenticate, viewmemberborrowing);

export default borrowRouter;

