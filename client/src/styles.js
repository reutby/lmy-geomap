import { makeStyles } from "@material-ui/core/styles";
import { Circle as CircleStyle, Stroke, Style } from 'ol/style';

export let pointsStyles = {
    'Point': new Style({
        image: new CircleStyle({
			radius: 5,
			fill: null,
			stroke: new Stroke({
				color: 'red',
			}),
		}),
    }),

}

export default makeStyles((theme)=>({
    topContainer: {
        margin: '5rem auto',
    },
    gridItem: {
        position: "relative",
        border: '1px solid black',
        height: '52rem',
        overflowY:'scroll',
    },
    [theme.breakpoints.down('sm')]: {
        gridContainer:{
            display:'flex',
            flexDirection:'column-reverse',
        }
    }

}));