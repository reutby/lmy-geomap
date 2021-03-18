import mongoose from "mongoose";

const rentalRecordSchema = mongoose.Schema({
    datasetId: {
        type: String,
        default: 'rental-standards-current-issues'
    },
    recordTimestamp: {
        type: Date,
        default: new Date().toISOString(),
    },
    fields: {
        totalUnit: Number,
        businessOperator: String,
        detailUrl: String,
        street: String,
        streetNumber:String,
        totalOutstanding:Number,
        geoLocalArea:String,
        recordType: {
            type: String,
            default: 'Point',
        },
        coordinateX: {
            type: Number,
            required: true,
            min: -180.0,
            max: -85.06,
        },
        coordinateY: {
            type: Number,
            required: true,
            max: 180.0,
            min: 85.06,
        }

    },
   
});


const rentalRecord = mongoose.model('RentalRecord', rentalRecordSchema);

export default rentalRecord;
