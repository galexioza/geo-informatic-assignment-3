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
var typeSelect1 = document.getElementById('type1');
var button = document.getElementById('select_button');

//test coordinates

var l2;

var typeSelection = "waterfall1"; //default value
var typeSelection1 = "parkingA"; //default value

function addInteractions() {
    map.removeLayer(l2);
    console.log('current type is ' + typeSelection);
    console.log('current type1 is ' + typeSelection1);
    console.log('test result '+(typeSelection == 'stream' && typeSelection1 == 'parkingA'))
    if (typeSelection == 'stream' && typeSelection1 == 'parkingA') {
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
            [174.695391, -36.736632],
        ];



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
    } else if(typeSelection == 'stream' && typeSelection1 == 'parkingB' ){
        console.log('test my coordinate');
        var coordinates2 = [
            [174.695391, -36.736632],
            [174.701824, -36.736595],
            [174.702653, -36.735901],
            [174.703313, -36.734494],

        ];
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
    } else if(typeSelection == 'stream' && typeSelection1 == 'parkingC' ){
            console.log('test my coordinate');
            var coordinates2 = [
                [174.695391, -36.736632],
                [174.700445, -36.736422],
                [174.700179, -36.733313],
                [174.700152, -36.732486],

            ];
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
    } else if(typeSelection == 'stream' && typeSelection1 == 'parkingD' ){
        console.log('test my coordinate');
        var coordinates2 = [
            [174.695391, -36.736632],
            [174.700445, -36.736422],
            [174.703627, -36.735250],
            [174.705898, -36.733891],
            [174.706211, -36.733236],
            [174.704963, -36.732455],

        ];
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
    } else if(typeSelection == 'bridge' && typeSelection1 == 'parkingA' ){
        console.log('test my coordinate');
        var coordinates2 = [
            [174.695158, -36.736147],
            [174.696460, -36.736652],
            [174.697897, -36.736855],
            [174.699871, -36.736407],
            [174.701544, -36.736095],
            [174.703415, -36.735367],
            [174.705109, -36.734121],

        ];
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
    } else if(typeSelection == 'bridge' && typeSelection1 == 'parkingB' ){
        console.log('test my coordinate');
        var coordinates2 = [
            [174.695158, -36.736147],
            [174.696460, -36.736652],
            [174.697897, -36.736855],
            [174.699871, -36.736407],
            [174.703365, -36.735503],
            [174.703313, -36.734494],

        ];
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
    } else if(typeSelection == 'bridge' && typeSelection1 == 'parkingC' ){
        console.log('test my coordinate');
        var coordinates2 = [
            [174.695158, -36.736147],
            [174.696992, -36.735476],
            [174.698278, -36.735446],
            [174.698050, -36.734300],
            [174.699773, -36.733720],
            [174.700152, -36.732486],

        ];
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
    } else if(typeSelection == 'bridge' && typeSelection1 == 'parkingD' ){
        console.log('test my coordinate');
        var coordinates2 = [
            [174.695158, -36.736147],
            [174.696460, -36.736652],
            [174.697897, -36.736855],
            [174.699871, -36.736407],
            [174.701544, -36.736095],
            [174.703415, -36.735367],
            [174.705967, -36.733991],
            [174.706153, -36.733532],
            [174.704963, -36.732455],

        ];
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
    } else if(typeSelection == 'waterfallA' && typeSelection1 == 'parkingA' ){
        console.log('test my coordinate');
        var coordinates2 = [
            [174.69594, -36.73664],
            [174.697892, -36.736842],
            [174.699171, -36.736356],
            [174.699914, -36.736388],
            [174.701554, -36.736112],
            [174.703802, -36.735046],
            [174.705109, -36.734121],

        ];
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
    } else if(typeSelection == 'waterfallA' && typeSelection1 == 'parkingB' ){
        console.log('test my coordinate');
        var coordinates2 = [
            [174.69594, -36.73664],
            [174.697892, -36.736842],
            [174.699171, -36.736356],
            [174.699914, -36.736388],
            [174.701554, -36.736112],
            [174.703802, -36.735046],
            [174.703313, -36.734494],

        ];
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
    } else if(typeSelection == 'waterfallA' && typeSelection1 == 'parkingC' ){
        console.log('test my coordinate');
        var coordinates2 = [
            [174.69594, -36.73664],
            [174.696992, -36.735476],
            [174.698278, -36.735446],
            [174.698050, -36.734300],
            [174.699773, -36.733720],
            [174.700152, -36.732486],

        ];
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
    } else if(typeSelection == 'waterfallA' && typeSelection1 == 'parkingD' ){
        console.log('test my coordinate');
        var coordinates2 = [
            [174.69594, -36.73664],
            [174.696460, -36.736652],
            [174.697897, -36.736855],
            [174.699871, -36.736407],
            [174.701544, -36.736095],
            [174.703415, -36.735367],
            [174.705967, -36.733991],
            [174.706153, -36.733532],
            [174.704963, -36.732455],

        ];
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
    } else if(typeSelection == 'waterfallB' && typeSelection1 == 'parkingA' ){
        console.log('test my coordinate');
        var coordinates2 = [
            [174.69948, -36.73776],
            [174.701554, -36.736112],
            [174.703802, -36.735046],
            [174.705109, -36.734121]

        ];
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
    } else if(typeSelection == 'waterfallB' && typeSelection1 == 'parkingB' ){
        console.log('test my coordinate');
        var coordinates2 = [
            [174.69948, -36.73776],
            [174.701554, -36.736112],
            [174.703802, -36.735046],
            [174.703313, -36.734494],

        ];
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
    } else if(typeSelection == 'waterfallB' && typeSelection1 == 'parkingC' ){
        console.log('test my coordinate');
        var coordinates2 = [
            [174.69948, -36.73776],
            [174.698278, -36.735446],
            [174.698050, -36.734300],
            [174.699773, -36.733720],
            [174.700152, -36.732486],

        ];
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
    } else if(typeSelection == 'waterfallB' && typeSelection1 == 'parkingD' ){
        console.log('test my coordinate');
        var coordinates2 = [
            [174.69948, -36.73776],
            [174.701544, -36.736095],
            [174.703415, -36.735367],
            [174.705967, -36.733991],
            [174.706153, -36.733532],
            [174.704963, -36.732455],

        ];
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
    } else if(typeSelection == 'waterfallC' && typeSelection1 == 'parkingA' ){
        console.log('test my coordinate');
        var coordinates2 = [
            [174.7001, -36.73772],
            [174.697892, -36.736842],
            [174.699171, -36.736356],
            [174.699914, -36.736388],
            [174.701554, -36.736112],
            [174.703802, -36.735046],
            [174.705109, -36.734121],

        ];





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
    typeSelection = typeSelect.value;
    console.log('get value' + typeSelection);
};

typeSelect1.onchange = function () {
    typeSelection1 = typeSelect1.value;
    console.log('get value 1' + typeSelection1);
};

button.onclick = function () {
    console.log('enter in button');
    addInteractions();

    typeSelect.value = typeSelection;
    typeSelect1.value = typeSelection1;
};

addInteractions(typeSelect);
