import express from "express";
import { getAllRecords, createRecord, deleteRecord } from "../controllers/rental-record.js"

const router = express.Router();

router.get('/', getAllRecords);
router.post('/', createRecord);
router.delete('/:id', deleteRecord);

export default router;