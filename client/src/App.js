/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {Grid, Container } from "@material-ui/core";
import useStyles, { pointsStyles } from "./styles";
import { GeoMap, DataTable, VectorLayer, TileLayer,FullScreenControl } from "./components";
import { Layers, Controls } from "./hoc";
import {useDispatch} from 'react-redux';
import {getAllRecords} from "./store/actions/rental-record";
import { osm } from "./Source";
import { fromLonLat } from 'ol/proj';

const App = () => {
  const classes = useStyles();
  const [center, setCenter] = useState([-123.10664756,
    49.28261413]);
  const headers = ['coordinateX','coordinateY','totalUnit', 'businessOperator', 'detailUrl','street','streetNumber','totalOutstanding','geoLocalArea'];
  const dispatch = useDispatch();
  const setCenterHandler = (x,y)=>{
    setCenter([x,y]);
  }
  useEffect(() => {
    dispatch(getAllRecords());
  });
  return (
    <Container className={classes.topContainer} maxWidth="xl">
      <Grid container  className={classes.gridContainer} spacing={2}>
        <Grid item className={classes.gridItem} md={5} xs={12}>
          <GeoMap center={fromLonLat(center)} zoom={14}>
            <Layers>
              <TileLayer
                source={osm()}
                zIndex={0}
              />
              <VectorLayer
                style={pointsStyles.Point}
              />
            </Layers>
            <Controls>
              <FullScreenControl />
            </Controls>
          </GeoMap>
        </Grid>
        <Grid item className={classes.gridItem} md={7} xs={12}>
          <DataTable setCenterHandler={setCenterHandler} headers={headers}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
