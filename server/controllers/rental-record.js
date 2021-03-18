import RentalRecord from "../models/rental-record.js";

export const getAllRecords = (req,res)=>{
    RentalRecord.find()
    .then((result)=> res.status(200).json(result))
    .catch(error=>res.status(404).json({ message: error.message }));
}
export const createRecord = (req,res)=>{
    const rentalRecord = req.body;
    const newRentalRecord = new RentalRecord({...rentalRecord});
    newRentalRecord.save()
    .then(()=>res.status(201).json(newRentalRecord))
    .catch(error=>res.status(409).json({ message: error.message }));
}

export const DeleteRecord = (req,res)=>{
    const recordId = req.body;
    RentalRecord.findByIdAndDelete(recordId)
    .then(()=>res.status(200).json({message:'Record deleted successfully'}))
    .catch(error=>res.status(409).json({ message: error.message }));
}