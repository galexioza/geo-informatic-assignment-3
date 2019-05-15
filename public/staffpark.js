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
import {Stroke, Style} from "ol/style";

var route = new Feature();


var coordinates2 = [
    [174.700050,-36.733643],
    [174.699025,-36.734087],
    [174.697496,-36.734404],
    [174.696422,-36.734336],
    [174.695425,-36.734245],
    [174.695425,-36.734150]
];

var massey = fromLonLat([174.702251,-36.733211]);

var geometry = new LineString(coordinates2);
geometry.transform('EPSG:4326', 'EPSG:3857');
route.setGeometry(geometry);

var view = new View({
    center: massey,
    zoom: 14
});

var lightStroke = new Style({
    stroke: new Stroke({
        color: [9, 123, 215, 0.6],
        width: 3
        // lineDash: [4,8],
        // lineDashOffset: 6
    })
});

var map = new Map({

    target: 'map',
    layers: [
        new TileLayer({
            preload: 4,
            source: new OSM()
        }),
        new VectorLayer({
            source: new VectorSource({
                features: [route]
            }),
            style:[lightStroke]}
        )
    ],
    loadTilesWhileAnimating: true,
    view: view
});


