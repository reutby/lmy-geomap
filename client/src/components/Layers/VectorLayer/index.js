import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MapContext from "../../../MapContext";
import OLVectorLayer from "ol/layer/Vector";
import { vector } from "../../../Source";
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import GeoJSON from 'ol/format/GeoJSON';
import { get } from 'ol/proj';
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
const createGeoJsonObject = (records) => {
	let newGeoJsonObject = {
		"type": "FeatureCollection",
		"features": new Array(records.length)
	};

	records.forEach((record, index) => {
		const { fields } = record;
		const {coordinateX,coordinateY} = fields;
		newGeoJsonObject.features[index] = {
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [
				  coordinateX,
				  coordinateY
				]
			}
		};
	});
	return newGeoJsonObject;
}

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