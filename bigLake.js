import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import {LineString, Point, Polygon} from 'ol/geom';
import {defaults as defaultInteractions, Pointer as PointerInteraction} from 'ol/interaction.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {TileJSON, Vector as VectorSource} from 'ol/source';
import {Fill, Icon, Stroke, Style} from 'ol/style';
import OSM from "ol/source/OSM";
import {fromLonLat} from "ol/proj";


/**
 * @constructor
 * @extends {module:ol/interaction/Pointer}
 */
var Drag = (function (PointerInteraction) {
    function Drag() {
        PointerInteraction.call(this, {
            handleDownEvent: handleDownEvent,
            handleDragEvent: handleDragEvent,
            handleMoveEvent: handleMoveEvent,
            handleUpEvent: handleUpEvent
        });

        /**
         * @type {module:ol/pixel~Pixel}
         * @private
         */
        this.coordinate_ = null;

        /**
         * @type {string|undefined}
         * @private
         */
        this.cursor_ = 'pointer';

        /**
         * @type {module:ol/Feature~Feature}
         * @private
         */
        this.feature_ = null;

        /**
         * @type {string|undefined}
         * @private
         */
        this.previousCursor_ = undefined;
    }

    if ( PointerInteraction ) Drag.__proto__ = PointerInteraction;
    Drag.prototype = Object.create( PointerInteraction && PointerInteraction.prototype );
    Drag.prototype.constructor = Drag;

    return Drag;
}(PointerInteraction));


/**
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} evt Map browser event.
 * @return {boolean} `true` to start the drag sequence.
 */
function handleDownEvent(evt) {
    var map = evt.map;

    var feature = map.forEachFeatureAtPixel(evt.pixel,
        function(feature) {
            return feature;
        });

    if (feature) {
        this.coordinate_ = evt.coordinate;
        this.feature_ = feature;
    }

    return !!feature;
}


/**
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} evt Map browser event.
 */
function handleDragEvent(evt) {
    var deltaX = evt.coordinate[0] - this.coordinate_[0];
    var deltaY = evt.coordinate[1] - this.coordinate_[1];

    var geometry = this.feature_.getGeometry();
    geometry.translate(deltaX, deltaY);

    this.coordinate_[0] = evt.coordinate[0];
    this.coordinate_[1] = evt.coordinate[1];
}


/**
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} evt Event.
 */
function handleMoveEvent(evt) {
    if (this.cursor_) {
        var map = evt.map;
        var feature = map.forEachFeatureAtPixel(evt.pixel,
            function(feature) {
                return feature;
            });
        var element = evt.map.getTargetElement();
        if (feature) {
            if (element.style.cursor != this.cursor_) {
                this.previousCursor_ = element.style.cursor;
                element.style.cursor = this.cursor_;
            }
        } else if (this.previousCursor_ !== undefined) {
            element.style.cursor = this.previousCursor_;
            this.previousCursor_ = undefined;
        }
    }
}


/**
 * @return {boolean} `false` to stop the drag sequence.
 */
function handleUpEvent() {
    this.coordinate_ = null;
    this.feature_ = null;
    return false;
}


var pointFeature = new Feature(new Point([0, 0]));

var lineFeature = new Feature(
    new LineString([[-1e7, 1e6], [-1e6, 3e6]]));

var polygonFeature = new Feature(
    new Polygon([[[19447075.22, -4402490.69], [19447084.46, -4402488.32],
        [19447091.14, -4402482.21], [19447082.90, -4402469.02], [19447077.89, -4402467.21]
        ,[19447075.22, -4402490.69],[19447075.22,-4402490.69]]]));

// 19447075.22,-4402490.69
// 19447084.46,-4402488.32
// 19447091.14,-4402482.21
// 19447082.90,-4402469.02
// 19447077.89,-4402467.21
// 19447075.22,-4402490.69
// 19447075.22,-4402490.69
var massey = fromLonLat([174.696049,-36.736853]);

var view = new View({
    center: massey,
    zoom: 17
});
var map = new Map({
    interactions: defaultInteractions().extend([new Drag()]),
    layers: [
        new TileLayer({
            source: new OSM()
        }),
        new VectorLayer({
            source: new VectorSource({
                features: [pointFeature, lineFeature, polygonFeature]
            }),
            style: new Style({
                image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
                    anchor: [0.5, 46],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    opacity: 0.95,
                    src: 'test.png'
                })),
                stroke: new Stroke({
                    width: 3,
                    color: [255, 0, 0, 1]
                }),
                fill: new Fill({
                    color: [0, 0, 255, 0.6]
                })
            })
        })
    ],
    target: 'map',
    view: view
});