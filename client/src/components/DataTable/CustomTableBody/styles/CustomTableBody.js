import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    
    tableCell: {
        fontSize: '.9rem',
        width: '20rem',
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