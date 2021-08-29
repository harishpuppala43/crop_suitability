var wms_layers = [];

var format_Wheat_0 = new ol.format.GeoJSON();
var features_Wheat_0 = format_Wheat_0.readFeatures(json_Wheat_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wheat_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wheat_0.addFeatures(features_Wheat_0);
var lyr_Wheat_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wheat_0, 
                style: style_Wheat_0,
                interactive: true,
    title: 'Wheat<br />\
    <img src="styles/legend/Wheat_0_0.png" /> 0<br />\
    <img src="styles/legend/Wheat_0_1.png" /> 1<br />'
        });
var format_Sugarcane_1 = new ol.format.GeoJSON();
var features_Sugarcane_1 = format_Sugarcane_1.readFeatures(json_Sugarcane_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sugarcane_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sugarcane_1.addFeatures(features_Sugarcane_1);
var lyr_Sugarcane_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sugarcane_1, 
                style: style_Sugarcane_1,
                interactive: true,
    title: 'Sugarcane<br />\
    <img src="styles/legend/Sugarcane_1_0.png" /> 1<br />'
        });
var format_Sorghum_2 = new ol.format.GeoJSON();
var features_Sorghum_2 = format_Sorghum_2.readFeatures(json_Sorghum_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sorghum_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sorghum_2.addFeatures(features_Sorghum_2);
var lyr_Sorghum_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sorghum_2, 
                style: style_Sorghum_2,
                interactive: true,
    title: 'Sorghum<br />\
    <img src="styles/legend/Sorghum_2_0.png" /> 0<br />\
    <img src="styles/legend/Sorghum_2_1.png" /> 1<br />'
        });
var format_Rice_3 = new ol.format.GeoJSON();
var features_Rice_3 = format_Rice_3.readFeatures(json_Rice_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rice_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rice_3.addFeatures(features_Rice_3);
var lyr_Rice_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rice_3, 
                style: style_Rice_3,
                interactive: true,
    title: 'Rice<br />\
    <img src="styles/legend/Rice_3_0.png" /> 0<br />\
    <img src="styles/legend/Rice_3_1.png" /> 1<br />'
        });
var format_Potato_4 = new ol.format.GeoJSON();
var features_Potato_4 = format_Potato_4.readFeatures(json_Potato_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potato_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potato_4.addFeatures(features_Potato_4);
var lyr_Potato_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Potato_4, 
                style: style_Potato_4,
                interactive: true,
    title: 'Potato<br />\
    <img src="styles/legend/Potato_4_0.png" /> 0<br />\
    <img src="styles/legend/Potato_4_1.png" /> 1<br />'
        });
var format_Mustard_5 = new ol.format.GeoJSON();
var features_Mustard_5 = format_Mustard_5.readFeatures(json_Mustard_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mustard_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mustard_5.addFeatures(features_Mustard_5);
var lyr_Mustard_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mustard_5, 
                style: style_Mustard_5,
                interactive: true,
    title: 'Mustard<br />\
    <img src="styles/legend/Mustard_5_0.png" /> 0<br />\
    <img src="styles/legend/Mustard_5_1.png" /> 1<br />'
        });
var format_Maize_6 = new ol.format.GeoJSON();
var features_Maize_6 = format_Maize_6.readFeatures(json_Maize_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maize_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maize_6.addFeatures(features_Maize_6);
var lyr_Maize_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Maize_6, 
                style: style_Maize_6,
                interactive: true,
    title: 'Maize<br />\
    <img src="styles/legend/Maize_6_0.png" /> 0<br />\
    <img src="styles/legend/Maize_6_1.png" /> 1<br />'
        });

lyr_Wheat_0.setVisible(true);lyr_Sugarcane_1.setVisible(true);lyr_Sorghum_2.setVisible(true);lyr_Rice_3.setVisible(true);lyr_Potato_4.setVisible(true);lyr_Mustard_5.setVisible(true);lyr_Maize_6.setVisible(true);
var layersList = [lyr_Wheat_0,lyr_Sugarcane_1,lyr_Sorghum_2,lyr_Rice_3,lyr_Potato_4,lyr_Mustard_5,lyr_Maize_6];
lyr_Wheat_0.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Sugarcane_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Sorghum_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Rice_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Potato_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Mustard_5.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Maize_6.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Wheat_0.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Sugarcane_1.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Sorghum_2.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Rice_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Potato_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Mustard_5.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Maize_6.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Wheat_0.set('fieldLabels', {'Id': 'no label', 'gridcode': 'inline label', });
lyr_Sugarcane_1.set('fieldLabels', {'Id': 'no label', 'gridcode': 'inline label', });
lyr_Sorghum_2.set('fieldLabels', {'Id': 'no label', 'gridcode': 'inline label', });
lyr_Rice_3.set('fieldLabels', {'Id': 'no label', 'gridcode': 'header label', });
lyr_Potato_4.set('fieldLabels', {'Id': 'no label', 'gridcode': 'inline label', });
lyr_Mustard_5.set('fieldLabels', {'Id': 'header label', 'gridcode': 'inline label', });
lyr_Maize_6.set('fieldLabels', {'Id': 'no label', 'gridcode': 'inline label', });
lyr_Maize_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});