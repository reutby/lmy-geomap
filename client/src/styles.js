import { makeStyles } from "@material-ui/core/styles";
import {RegularShape, Stroke, Style, Fill } from 'ol/style';

export let pointsStyles = {
    'Point': new Style({
        image: new RegularShape({
            stroke: new Stroke({color: 'red', width: 2}),
            fill: new Fill({color: 'red'}),
            points: 4,
            radius: 10,
            radius2: 0,
            angle: 0,
          }),
    }),

}

export default makeStyles((theme) => ({
    topContainer: {
        margin: '5rem auto',
        position:'relative',
    },
    gridItem: {
        position: "relative",
        height: 'auto',
        
    },
    gridContainer:{
        boxShadow:'0 1rem 2rem rgba(0,0,0,.6)',
    },
    [theme.breakpoints.down('sm')]: {
        gridContainer: {
            flexDirection: 'column-reverse',
            width:'auto',
        }
    }

}));