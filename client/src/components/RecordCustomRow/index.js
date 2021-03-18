import { Input, Button, TableCell, TableRow } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createRecord } from "../../store/actions/rental-record";
const RecordCustomRow = ({ headers }) => {
    const [record, setRecord] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        let newRecord = {};
        headers.forEach((header) => {
            newRecord = {
                ...newRecord,
                [header]: ''
            }
        })
        setRecord(newRecord);
    }, []);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setRecord(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    const onSubmitHandler = () => {
        dispatch(createRecord({
            fields: {
                ...record
            }
        }));
        clearHandler()
    }
    const clearHandler =()=>{
        const clearFields = {...record};
        for (let key in clearFields){
            clearFields[key] = '';
        }
        setRecord(clearFields);
    }

    let row = [];
    if (!record) {
        return null;
    }

    for (let key in record) {
        row.push(<TableCell align="center" key={key}>
            <Input
                value={record[key]}
                name={key}
                required
                onChange={onChangeHandler}
            />
        </TableCell>)
    }

    return (
        row &&
        <TableRow>
            <TableCell align="center">
                <Button color="default" onClick={onSubmitHandler} variant="contained">Add</Button>
            </TableCell>
            {row.map(element => element)}
        </TableRow>
    )
}

export default RecordCustomRow;