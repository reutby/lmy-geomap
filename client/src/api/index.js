import axios from "axios";

const API = axios.create({baseURL:'http://localhost:5000'});

//RECORDS
//maybe i will change the route to /records
export const fetchRecords = ()=>API.get('/');
export const createRecord = (newRecord)=>API.post('/',newRecord);
export const deleteRecord = (id)=>API.delete('/',id);

