import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import Point from 'ol/geom/Point.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import TileJSON from 'ol/source/TileJSON';
import VectorSource from 'ol/source/Vector';
import {Icon, Style} from 'ol/style';
import OSM from "ol/source/OSM";
import {fromLonLat} from "ol/proj";


var iconFeature = new Feature({
    geometry: new Point([19447163.27,-4402475.41]),
    name: 'tributary-stream-waterfall'
});


var iconStyle = new Style({
    image: new Icon( ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'https://img.icons8.com/metro/26/000000/marker.png'
    }))
});

iconFeature.setStyle(iconStyle);

var vectorSource = new VectorSource({
    features: [iconFeature]
});

var vectorLayer = new VectorLayer({
    source: vectorSource
});


var originLayer  = new TileLayer({
    source: new OSM()
});

var massey = fromLonLat([174.697288,-36.736063]);

var map = new Map({
    layers: [originLayer, vectorLayer],
    target: document.getElementById('map'),
    view: new View({
        center: massey,
        zoom: 16
    })
});

var element = document.getElementById('popup');

var popup = new Overlay({
    element: element,
    positioning: 'bottom-center',
    stopEvent: false,
    offset: [0, -50]
});
map.addOverlay(popup);

// display popup on click
map.on('click', function(evt) {
    var feature = map.forEachFeatureAtPixel(evt.pixel,
        function(feature) {
            return feature;
        });
    if (feature) {
        var coordinates = feature.getGeometry().getCoordinates();
        popup.setPosition(coordinates);
        $(element).popover({
            placement: 'top',
            html: true,
            content: feature.get('name')
        });
        $(element).popover('show');
    } else {
        $(element).popover('destroy');
    }
});

// change mouse cursor when over marker
map.on('pointermove', function(e) {
    if (e.dragging) {
        $(element).popover('destroy');
        return;
    }
    var pixel = map.getEventPixel(e.originalEvent);
    var hit = map.hasFeatureAtPixel(pixel);
    map.getTarget().style.cursor = hit ? 'pointer' : '';
});