export const createGeoJsonObject = (records) => {
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

export const createRowsData = (records) => {
    const newRowsValues = new Array(records.length);
    records.forEach((row,index) => {
        const fieldsData = { ...row.fields, id: row._id };
        newRowsValues[records.length-1-index] = fieldsData;
    })
    return newRowsValues;
}