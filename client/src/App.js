import React, { useState } from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import useStyles, { pointsStyles } from "./styles";
import { GeoMap, DataTable, VectorLayer, TileLayer,PointsLayer,FullScreenControl } from "./components";
import { Layers, Controls } from "./hoc";

import { osm, vector } from "./Source";
import { fromLonLat, get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';

const geojsonObject = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "totalUnits": 60,
        "businessOperator": "0707892 BC Ltd",
        "detailUrl": "http://app.vancouver.ca/RPS_Net/Default.aspx?num=320&street=ABBOTT%20STREET",
        "street": "ABBOTT STREET",
        "streetNumber": "320",
        "totalOutStanding": 1,
        "geoLocalArea": "Downtown",
        
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.10664756,
          49.28261413
        ]
      }
    }
    ,
    {
      "type": "Feature",
      "properties": {
        "totalUnits": 71,
        "businessOperator": "Central City Foundation",
        "detailUrl": "http://app.vancouver.ca/RPS_Net/Default.aspx?num=404&street=ABBOTT%20STREET",
        "street": "ABBOTT STREET",
        "streetNumber": "404",
        "totalOutStanding": 3,
        "geoLocalArea": "Downtown"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.10713559,
          49.2816849
        ]
      }
    }
  ]
};

const App = () => {
  const classes = useStyles();
  const [center, setCenter] = useState([-123.10664756,
    49.28261413]);
  const [zoom, setZoom] = useState(12);
  const headers = ['Total-Unit', 'Business-Operator', 'Detail-Url','Street','Street-Number','Total-Outstanding','Geo-Local-Area']
  return (
    <Container className={classes.topContainer} maxWidth="xl">
      <Grid container  spacing={3}>
        <Grid item className={classes.gridItem} md={5} sm={12}>
          <GeoMap center={fromLonLat(center)} zoom={zoom}>
            <Layers>
              <TileLayer
                source={osm()}
                zIndex={0}
              />
              <VectorLayer
                source={vector({ features: new GeoJSON().readFeatures(geojsonObject, { featureProjection: get('EPSG:3857') }) })}
                style={pointsStyles.Point}
              
              />
            </Layers>
            <Controls>
              <FullScreenControl />
            </Controls>
          </GeoMap>
        </Grid>
        <Grid item className={classes.gridItem} md={7} sm={12}>
          <DataTable data = {geojsonObject.features} headers={headers}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
