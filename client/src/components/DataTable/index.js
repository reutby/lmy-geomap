import React, { useState, useEffect } from 'react';
import {Button,TableHead,TableBody,Table,TableCell, TableContainer, Paper,TableRow} from "@material-ui/core";
import {RecordCustomRow} from "../";
import useStyles from "./styles/DataTable";
const DataTable = ({ data, headers }) => {

    const [rows, setRows] = useState(null);

    const createRowsData = () => {
        const newRowsValues = [];
        data.forEach((row) => {
            let newRow = [];
            const fieldsData = { ...row.properties};
            for (var key in fieldsData) {
                newRow = [
                    ...newRow,
                    fieldsData[key]
                ]
            }
            newRowsValues.push(newRow);
        })
        return newRowsValues;
    }
    useEffect(() => {
        setRows([...(createRowsData())]);
    }, [])

    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="simple table">
                <TableHead >
                    <TableRow>
                        <TableCell align="center" className={classes.headers} >Actions</TableCell>
                        {headers.map((header) => <TableCell className={classes.headers} key={header}>{header}</TableCell>)}
                    </TableRow>
                </TableHead>
                {rows &&
                    <TableBody>
                        <RecordCustomRow headers={headers}/>
                        {rows.map((row) => (
                            <TableRow key={`${row}`}>
                                <TableCell align="center" component="th" scope="row" className={classes.actions}>
                                    <Button variant="contained" color="primary">Select</Button>
                                    <Button variant="contained" color="secondary">Delete</Button>
                                </TableCell>
                                {
                                    row.map((rowCell) =>
                                        <TableCell key={rowCell} component="th" scope="row">
                                            {rowCell}
                                        </TableCell>)
                                }
                            </TableRow>
                        ))}
                    </TableBody>}
            </Table>
        </TableContainer>
    )
}

export default DataTable;