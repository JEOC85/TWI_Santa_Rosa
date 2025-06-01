ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-10081620.690309, 1605398.067821, -10055467.427057, 1622953.408331]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_TWISantaRosa_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TWI Santa Rosa<br />\
    <img src="styles/legend/TWISantaRosa_1_0.png" /> -6.5023<br />\
    <img src="styles/legend/TWISantaRosa_1_1.png" /> -6.2633<br />\
    <img src="styles/legend/TWISantaRosa_1_2.png" /> -6.0243<br />\
    <img src="styles/legend/TWISantaRosa_1_3.png" /> -5.7853<br />\
    <img src="styles/legend/TWISantaRosa_1_4.png" /> -5.5463<br />\
    <img src="styles/legend/TWISantaRosa_1_5.png" /> -5.3073<br />\
    <img src="styles/legend/TWISantaRosa_1_6.png" /> -5.0683<br />\
    <img src="styles/legend/TWISantaRosa_1_7.png" /> -4.8477<br />\
    <img src="styles/legend/TWISantaRosa_1_8.png" /> -4.6639<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TWISantaRosa_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10093910.412409, 1549864.235373, -10025201.796301, 1632010.262027]
        })
    });
var format_MunicipiosDeSantaRosa_2 = new ol.format.GeoJSON();
var features_MunicipiosDeSantaRosa_2 = format_MunicipiosDeSantaRosa_2.readFeatures(json_MunicipiosDeSantaRosa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosDeSantaRosa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosDeSantaRosa_2.addFeatures(features_MunicipiosDeSantaRosa_2);
var lyr_MunicipiosDeSantaRosa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipiosDeSantaRosa_2, 
                style: style_MunicipiosDeSantaRosa_2,
                popuplayertitle: 'Municipios De Santa Rosa',
                interactive: false,
                title: '<img src="styles/legend/MunicipiosDeSantaRosa_2.png" /> Municipios De Santa Rosa'
            });
var format_PobladosSantaRosa_3 = new ol.format.GeoJSON();
var features_PobladosSantaRosa_3 = format_PobladosSantaRosa_3.readFeatures(json_PobladosSantaRosa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PobladosSantaRosa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PobladosSantaRosa_3.addFeatures(features_PobladosSantaRosa_3);
var lyr_PobladosSantaRosa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PobladosSantaRosa_3, 
                style: style_PobladosSantaRosa_3,
                popuplayertitle: 'Poblados Santa Rosa',
                interactive: false,
                title: '<img src="styles/legend/PobladosSantaRosa_3.png" /> Poblados Santa Rosa'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_TWISantaRosa_1.setVisible(true);lyr_MunicipiosDeSantaRosa_2.setVisible(true);lyr_PobladosSantaRosa_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_TWISantaRosa_1,lyr_MunicipiosDeSantaRosa_2,lyr_PobladosSantaRosa_3];
lyr_MunicipiosDeSantaRosa_2.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'municipio': 'municipio', 'cod_dep': 'cod_dep', 'departamen': 'departamen', 'codigo_mun': 'codigo_mun', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_PobladosSantaRosa_3.set('fieldAliases', {'OID_': 'OID_', 'COD_CENSO': 'COD_CENSO', 'COD_CART': 'COD_CART', 'NUEVO_COD': 'NUEVO_COD', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'LUGAR_POBL': 'LUGAR_POBL', 'CATEGORIA': 'CATEGORIA', 'REUBICADO': 'REUBICADO', 'OID1': 'OID1', 'POBTOT': 'POBTOT', 'HOMBRES': 'HOMBRES', 'MUJERES': 'MUJERES', 'GRUPO1': 'GRUPO1', 'GRUPO2': 'GRUPO2', 'GRUPO3': 'GRUPO3', 'GRUPO4': 'GRUPO4', 'GRUPO5': 'GRUPO5', 'GRUPO6': 'GRUPO6', 'GRUPO7': 'GRUPO7', 'GRUPO8': 'GRUPO8', 'GRUPO9': 'GRUPO9', 'GRUPO10': 'GRUPO10', 'GRUPO11': 'GRUPO11', 'GRUPO12': 'GRUPO12', 'GRUPO13': 'GRUPO13', 'GRUPO14': 'GRUPO14', 'URBANA': 'URBANA', 'RURAL': 'RURAL', 'OID_1': 'OID_1', 'X_': 'X_', 'Y_': 'Y_', });
lyr_MunicipiosDeSantaRosa_2.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'municipio': 'TextEdit', 'cod_dep': 'TextEdit', 'departamen': 'TextEdit', 'codigo_mun': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_PobladosSantaRosa_3.set('fieldImages', {'OID_': 'Range', 'COD_CENSO': 'TextEdit', 'COD_CART': 'TextEdit', 'NUEVO_COD': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'LUGAR_POBL': 'TextEdit', 'CATEGORIA': 'TextEdit', 'REUBICADO': 'TextEdit', 'OID1': 'Range', 'POBTOT': 'Range', 'HOMBRES': 'TextEdit', 'MUJERES': 'TextEdit', 'GRUPO1': 'Range', 'GRUPO2': 'Range', 'GRUPO3': 'Range', 'GRUPO4': 'Range', 'GRUPO5': 'Range', 'GRUPO6': 'Range', 'GRUPO7': 'Range', 'GRUPO8': 'Range', 'GRUPO9': 'Range', 'GRUPO10': 'Range', 'GRUPO11': 'Range', 'GRUPO12': 'Range', 'GRUPO13': 'Range', 'GRUPO14': 'Range', 'URBANA': 'Range', 'RURAL': 'Range', 'OID_1': 'Range', 'X_': 'TextEdit', 'Y_': 'TextEdit', });
lyr_MunicipiosDeSantaRosa_2.set('fieldLabels', {'id': 'no label', 'objectid': 'no label', 'municipio': 'no label', 'cod_dep': 'no label', 'departamen': 'no label', 'codigo_mun': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_PobladosSantaRosa_3.set('fieldLabels', {'OID_': 'no label', 'COD_CENSO': 'no label', 'COD_CART': 'no label', 'NUEVO_COD': 'no label', 'DEPARTAMEN': 'no label', 'MUNICIPIO': 'no label', 'LUGAR_POBL': 'no label', 'CATEGORIA': 'no label', 'REUBICADO': 'no label', 'OID1': 'no label', 'POBTOT': 'no label', 'HOMBRES': 'no label', 'MUJERES': 'no label', 'GRUPO1': 'no label', 'GRUPO2': 'no label', 'GRUPO3': 'no label', 'GRUPO4': 'no label', 'GRUPO5': 'no label', 'GRUPO6': 'no label', 'GRUPO7': 'no label', 'GRUPO8': 'no label', 'GRUPO9': 'no label', 'GRUPO10': 'no label', 'GRUPO11': 'no label', 'GRUPO12': 'no label', 'GRUPO13': 'no label', 'GRUPO14': 'no label', 'URBANA': 'no label', 'RURAL': 'no label', 'OID_1': 'no label', 'X_': 'no label', 'Y_': 'no label', });
lyr_PobladosSantaRosa_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});