import React, { useState, useEffect } from 'react';
import { Button, Link, CircularProgress, TableHead, TableBody, Table, TableCell, TableContainer, Paper, TableRow } from "@material-ui/core";
import { RecordCustomRow } from "../";
import { useSelector, useDispatch } from "react-redux";
import { deleteRecord } from "../../store/actions/rental-record";
import useStyles from "./styles/DataTable";

const createRowsData = (records) => {
    const newRowsValues = new Array(records.length);
    records.forEach((row,index) => {
        const fieldsData = { ...row.fields, id: row._id };
        newRowsValues[records.length-1-index] = fieldsData;
    })
    return newRowsValues;
}
const DataTable = ({ headers, setCenterHandler }) => {

    const [rows, setRows] = useState(null);
    const records = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        setRows([...(createRowsData(records))]);

    }, [records])
    const classes = useStyles();
    return (
        !rows ? <CircularProgress /> : <TableContainer className={classes.tableContainer} component={Paper}>
            <Table stickyHeader  className={classes.table} size="small" aria-label="simple table">
                <TableHead  >
                    <TableRow>
                        <TableCell align="center" className={classes.headers} >Actions</TableCell>
                        {headers.map((header) => <TableCell className={classes.headers} key={header}>{header}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <RecordCustomRow headers={headers} />
                </TableBody>
                {rows &&
                    <TableBody>
                        {rows.map((row) => (

                            <TableRow key={row.id}>
                                <TableCell align="center" component="th" scope="row" className={classes.tableCell}>
                                    <Button variant="contained" onClick={() => { setCenterHandler(row.coordinateX, row.coordinateY) }} color="primary">Select</Button>
                                    <Button variant="contained" onClick={() => { dispatch(deleteRecord(row.id)) }} color="secondary">Delete</Button>
                                </TableCell>
                                {
                                    headers.map((header) =>
                                        <TableCell className={classes.tableCell} align="center" key={`${header} ${row.id}`} component="th" scope="row">
                                            {header === 'detailUrl' ?
                                                <Link href={row[header]} >
                                                    Link
                                                </Link> : row[header]}
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