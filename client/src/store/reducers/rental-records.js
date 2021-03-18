import * as actionTypes from "../actions/actions-types";

const reducer = (rentalRecords = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_RECORDS:
            return action.payload;
        case actionTypes.CREATE_RECORD:
            return [...rentalRecords, action.payload];
        case actionTypes.DELETE_RECORD:
            return rentalRecords.filter((rentalRecord) => rentalRecord._id !== action.payload);
        default:
            return rentalRecords;
    }
}

export default reducer;