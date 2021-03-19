import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => (
    {
        olMap: {
            minWidth: '100%',
            minHeight: '10rem',
            height: "50rem",
            width: "100%",
        },
        [theme.breakpoints.down('sm')]: {
            olMap: {
                width: 'auto',
            }
        }

    }
))