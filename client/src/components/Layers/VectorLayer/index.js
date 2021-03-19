import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MapContext from "../../../contexts/MapContext";
import OLVectorLayer from "ol/layer/Vector";
import { vector } from "../../../source";
import GeoJSON from 'ol/format/GeoJSON';
import { get } from 'ol/proj';
import {createGeoJsonObject} from "../../../helpers";



const VectorLayer = ({style, zIndex = 0 }) => {
	const { map } = useContext(MapContext);
	const records = useSelector(state => state);
		
	useEffect(() => {
		if (!map || !records) return;

		const geoJsonObject = createGeoJsonObject(records);

		let vectorLayer = new OLVectorLayer(
			{
				source:vector({ features: new GeoJSON().readFeatures(geoJsonObject, { featureProjection: get('EPSG:3857') })}),
				style:style,
			});
			
		map.addLayer(vectorLayer);
		vectorLayer.setZIndex(zIndex);

		return () => {
			if (map) {
				map.removeLayer(vectorLayer);
			}
		};
	}, [map,records]);

	return null;
};

export default VectorLayer;