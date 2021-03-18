/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import * as ol from "ol";
import MapContext from "../../MapContext";
import useStyles from "./styles/GeoMap";
import { defaults} from 'ol/interaction';
const GeoMap = ({ children, zoom, center }) => {
    const mapRef = useRef();
    const [map, setMap] = useState(null);
    const classes = useStyles();
    // on component mount
    useEffect(() => {
        let options = {
            view: new ol.View({ zoom, center }),
            layers: [],
            controls: [],
            overlays: [],
            interactions: defaults({dragPan: false, mouseWheelZoom: false})
        };

        let mapObject = new ol.Map(options);
        mapObject.setTarget(mapRef.current);
        setMap(mapObject);
        
        //unmount
        return () => mapObject.setTarget(undefined);
    }, []);

    // zoom change handler
    useEffect(() => {
        if (!map) return;

        map.getView().setZoom(zoom);
    }, [zoom]);

    // center change handler
    useEffect(() => {
        if (!map) return;

        map.getView().setCenter(center)
    }, [center])

    return (
        <MapContext.Provider value={{ map }}>
            <div ref={mapRef} className={classes.olMap}>
                {children}
            </div>
        </MapContext.Provider>
    )
}

export default GeoMap;