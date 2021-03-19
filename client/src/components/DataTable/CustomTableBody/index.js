import { TableBody, Link, TableCell, Button, TableRow } from "@material-ui/core";
import useStyles from "./styles/CustomTableBody";
import { deleteRecord } from "../../../store/actions/rental-record";
import {useDispatch} from "react-redux";


const CustomTableBody = ({ headers, rows,setCenterHandler }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
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
        </TableBody>
    )
}

export default CustomTableBody;