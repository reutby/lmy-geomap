import { useContext, useEffect } from "react";
import MapContext from "../../../MapContext";
import WebGLPointsLayer from 'ol/layer/WebGLPoints';

const VectorLayer = ({ source, style, zIndex = 0 }) => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		if (!map) return;

		let vectorLayer = new WebGLPointsLayer({
			source,
			style
		});

		map.addLayer(vectorLayer);
		vectorLayer.setZIndex(zIndex);

		return () => {
			if (map) {
				map.removeLayer(vectorLayer);
			}
		};
	}, [map]);

	return null;
};

export default VectorLayer;