import { Input, Button, TableCell, TableRow } from "@material-ui/core";
import { useState, useEffect } from "react";

const RecordCustomRow = ({ headers }) => {
    const [record, setRecord] = useState(null);

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

    const onChangeHandler=(e)=>{
        const {name,value} = e.target;
        setRecord(prev=>({
            ...prev,
            [name]:value,
        }))
    }
    let row = [];
    if (!record) {
        return null;
    }
    console.log(record);
    for (let key in record) {
        row.push(<TableCell>
            <Input
                value={record[key]}
                name={key}
                required
                onChange={onChangeHandler}
            />
        </TableCell>)
    }

    return (
        row &&<TableRow>
        <TableCell align="center">
            <Button color="default" variant="contained">Add</Button>
        </TableCell>
            {row.map(element=>element)}  
        </TableRow>
    )
}

export default RecordCustomRow;