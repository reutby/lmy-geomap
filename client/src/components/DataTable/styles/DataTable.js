import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    table: {
        width: 'auto',
    },
    tableContainer: {
        maxHeight: '50rem',
        overflowY: 'scroll',
        width:'100%',
        // width:'max-content',
    },
    tableCell: {
        fontSize: '.9rem',
        width: '20rem',
    },
    headers: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },

    rows: {
        display: 'flex',
        flexDirection: 'column-reverse',
    },

    [theme.breakpoints.down('sm')]: {
        tableCell: {
            fontSize: '1.5rem',
        },
    }
}))