import axios from "axios";

const API = axios.create({baseURL:'http://localhost:5000'});

//RECORDS
//maybe i will change the route to /records
export const fetchRecords = ()=>API.get('/records');
export const createRecord = (newRecord)=>API.post('/records',newRecord);
export const deleteRecord = (id)=>API.delete(`/records/${id}`);

