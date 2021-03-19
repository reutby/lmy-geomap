import React, { useState, useEffect } from 'react';
import {CircularProgress, TableHead, TableBody, Table, TableCell, TableContainer, Paper, TableRow } from "@material-ui/core";
import { RecordCustomRow } from "../";
import { useSelector } from "react-redux";
import useStyles from "./styles/DataTable";
import { createRowsData } from "../../helpers";
import CustomTableBody from "./CustomTableBody";

const DataTable = ({ headers, setCenterHandler }) => {
    const [rows, setRows] = useState(null);
    const records = useSelector(state => state);
   
    useEffect(() => {
        setRows([...(createRowsData(records))]);

    }, [records])
    const classes = useStyles();
    return (
        !rows ? <CircularProgress /> : <TableContainer className={classes.tableContainer} component={Paper}>
            <Table stickyHeader className={classes.table} size="small" aria-label="simple table">
                <TableHead  >
                    <TableRow>
                        <TableCell align="center" className={classes.headers} >Actions</TableCell>
                        {headers.map((header) => <TableCell className={classes.headers} key={header}>{header}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <RecordCustomRow headers={headers} />
                </TableBody>
                {rows && <CustomTableBody setCenterHandler={setCenterHandler} headers={headers} rows = {rows} />}
            </Table>
        </TableContainer>
    )
}

export default DataTable;