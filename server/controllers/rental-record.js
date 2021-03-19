import RentalRecord from "../models/rental-record.js";

export const getAllRecords = (req, res) => {
    RentalRecord.find({})
        .then((result) => res.status(200).json(result))
        .catch(error => res.status(404).json({ message: error.message }));
}
export const createRecord = (req, res) => {
    const rentalRecord = req.body;
    const { coordinateX, coordinateY } = rentalRecord.fields;
    if (isNaN(coordinateY) || isNaN(coordinateX)) {
        return res.status(409).json({ message: 'Not a Number' });
    }
    rentalRecord.fields.coordinateX = parseFloat(coordinateX);
    rentalRecord.fields.coordinateY = parseFloat(coordinateY);
    const newRentalRecord = new RentalRecord({ fields: { ...(rentalRecord.fields) } });
    newRentalRecord.save()
        .then(() => res.status(201).json(newRentalRecord))
        .catch(error => res.status(409).json({ message: error.message }));
}

export const deleteRecord = (req, res) => {
    const {id} = req.params;
    
    RentalRecord.findByIdAndDelete(id)
        .then(() => res.status(200).json({ message: 'Record deleted successfully' }))
        .catch(error => res.status(409).json({ message: error.message }));
}