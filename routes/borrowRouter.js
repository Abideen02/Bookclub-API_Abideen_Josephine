import express from "express";
import { addRecord, viewRecord, viewAllRecord, updateRecord, viewMemberRecord } from '../controllers/borrowController.js'
<<<<<<< HEAD
// import { authenticate } from '../middlewares/auth.js';
=======
import { authenticate } from '../middlewares/auth.js';
>>>>>>> 17b6d005eb31d02f83d10aefbff964753772f84e

const borrowRouter = express.Router();

// Create Record borrow/
<<<<<<< HEAD
borrowRouter.post("/", addRecord);

// View Record borrow/:id
borrowRouter.get("/:id", viewRecord);

// View all records borrow/
borrowRouter.get("/", viewAllRecord);

// Update borrowing record borrow/
borrowRouter.put("/", updateRecord);

// View Member Borrowings borrow/bymember/:memberid
borrowRouter.get("/", viewMemberRecord);
=======
borrowRouter.post("/", authenticate, addRecord);

// View Record borrow/:id
borrowRouter.post("/", authenticate, viewRecord);

// View all records borrow/
borrowRouter.post("/", authenticate, viewAllRecord);

// Update borrowing record borrow/
borrowRouter.post("/", authenticate, updateRecord);

// View Member Borrowings borrow/bymember/:memberid
borrowRouter.post("/", authenticate, viewMemberRecord);
>>>>>>> 17b6d005eb31d02f83d10aefbff964753772f84e


export default borrowRouter;