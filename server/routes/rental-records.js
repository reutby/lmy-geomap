import express from "express";
import { getAllRecords, createRecord, DeleteRecord } from "../controllers/rental-record.js"

const router = express.Router();

router.get('/', getAllRecords);
router.post('/', createRecord);
router.delete('/:id', DeleteRecord);

export default router;