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
           
        },
        coordinateY: {
            type: Number,
            required: true,
            
        }

    },
   
});


const rentalRecord = mongoose.model('RentalRecord', rentalRecordSchema);

export default rentalRecord;
