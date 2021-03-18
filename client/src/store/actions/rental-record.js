import * as api from "../../api";
import * as actionTypes from "./actions-types";

export const getAllRecords = ()=>async (dispatch)=>{
    try{
        const {data} = await api.fetchRecords();
        dispatch({type:actionTypes.FETCH_ALL_RECORDS, payload:data});
    }catch(err){
        console.log(err);
    }
}

export const createRecord = (record) => async (dispatch) => {
    try {
        const { data } = await api.createRecord(record);
        dispatch({ type: actionTypes.CREATE_RECORD, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const deleteRecord = (id)=>async(dispatch)=>{
    try{
        await api.deleteRecord(id);
        dispatch({type:actionTypes.DELETE_RECORD, payload:id})
    }catch(err){
        console.log(err);
    }
}
