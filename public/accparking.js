import Map from 'ol/Map';
import {Point, LineString} from 'ol/geom';
import {Vector} from 'ol/layer';
import {fromLonLat, transform} from "ol/proj";
import Feature from 'ol/Feature';
import OSM from "ol/source/OSM";
import View from "ol/View";
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {Vector as VectorSource} from 'ol/source.js';
import {Select} from 'ol/interaction'
import {Style, Stroke} from 'ol/style';

var route = new Feature();

var coordinates = [
    [174.700712, -36.735084],
    [174.699899, -36.735377],
    [174.699060, -36.735443],
    [174.697492, -36.735376],
    [174.695468, -36.735348]
];


var massey = fromLonLat([174.702251, -36.733211]);

var geometry = new LineString(coordinates);
geometry.transform('EPSG:4326', 'EPSG:3857');
route.setGeometry(geometry);

var view = new View({
    center: massey,
    zoom: 14
});

var lightStroke = new Style({
    stroke: new Stroke({
        color: [255, 255, 255, 0.6],
        width: 2,
        // lineDash: [4,8],
        // lineDashOffset: 6
    })
});

var darkStroke = new Style({
    stroke: new Stroke({
        color: [0, 0, 0, 0.6],
        width: 3,
    })
});

// var myVectorLayer = new ol.layer.Vector({
//     source: myPolygon,
//     style: [lightStroke, darkStroke]
// });

var map = new Map({
    target: 'map',
    layers: [new TileLayer({
        preload: 4,
        source: new OSM()
    })],
    loadTilesWhileAnimating: true,
    view: view
});


var typeSelect = document.getElementById('type');

//test coordinates
var coordinates2 = [
    [174.705109, -36.734121],
    [174.706237, -36.733826],
    [174.706750, -36.734140],
    [174.706827, -36.734577],
    [174.703593, -36.736219],
    [174.700445, -36.736422],
    [174.698305, -36.736734],
    [174.697005, -36.736273],
    [174.696050, -36.736640],
    [174.695391, -36.736632]
];

var l2;

function addInteractions(typeSelect) {
    map.removeLayer(l2);
    console.log('current type is '+typeSelect.value.trim());
    console.log("recreation" == typeSelect.value.trim());
    if(typeSelect.value == 'recreation') {
        l2 = new VectorLayer({
            source: new VectorSource({
                features: [route],
                width: 5
            }),
            style: [darkStroke]
        });
        console.log('add layers');
        map.addLayer(l2);
    }
    else {
        var route1 = new Feature();
        var geometry = new LineString(coordinates2);
        geometry.transform('EPSG:4326', 'EPSG:3857');
        route1.setGeometry(geometry);
        l2 = new VectorLayer({
            source: new VectorSource({
                features: [route1],
                width: 5
            }),
            style: [darkStroke]
        });
        console.log('add layers');
        map.addLayer(l2);
    }
}


typeSelect.onchange = function () {
    addInteractions(typeSelect);
};

addInteractions(typeSelect);
