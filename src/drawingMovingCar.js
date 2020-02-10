import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import * as turf from 'turf';

var _map = null;

// Number of steps to use in the arc and animation
var steps = 2500;

export default class drawingMovingCar {


    constructor(map) {
        _map = map;

        // toulouse
        var toulouse = [1.42, 43.61];

        // montauban
        var montauban = [1.34, 44];

        var caussade = [1.537, 44.163];

        var cahors = [1.4334, 44.44];
        var brives = [1.5284, 45.1524];

        var course = [toulouse, montauban, caussade, cahors, brives];

        this.drawAnimatedLine(course);
    }

    drawALine(origin, destination, name) {

        var route = {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [origin, destination]
                    }
                }
            ]
        };

        // Calculate the distance in kilometers between route start/end point.
        var lineDistance = turf.lineDistance(route.features[0], 'kilometers');

        var arc = [];

        // Draw an arc between the `origin` & `destination` of the two points
        for (var i = 0; i < lineDistance; i += lineDistance / steps) {
            var segment = turf.along(route.features[0], i, 'kilometers');
            arc.push(segment.geometry.coordinates);
        }

        // Update the route with calculated arc coordinates
        route.features[0].geometry.coordinates = arc;

        _map.addSource(name, {
            'type': 'geojson',
            'data': route
        });

        _map.addLayer({
            'id': 'route-' + name,
            'source': name,
            'type': 'line',
            'paint': {
                'line-width': 2,
                'line-color': '#007cbf'
            }
        });

        return (route);
    }

    drawAPoint(origin) {

        var point = {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'Point',
                        'coordinates': origin
                    }
                }
            ]
        };

        _map.addSource('point', {
            'type': 'geojson',
            'data': point
        });

        _map.addLayer({
            'id': 'point',
            'source': 'point',
            'type': 'symbol',
            'layout': {
                'icon-image': 'airport-15',
                'icon-rotate': ['get', 'bearing'],
                'icon-rotation-alignment': 'map',
                'icon-allow-overlap': true,
                'icon-ignore-placement': true
            }
        });
        return (point);
    }

    drawAnimatedLine(list) {

        console.log("LIST");
        console.log(list);
        // Used to increment the value of the point measurement against the route.
        var counter = 0;

        var routes = [];


        for (let i = 0; i < list.length - 1; i++)
        {
            routes.push(this.drawALine(list[i], list[i + 1], i.toString()));
        }



        var _this = this;
        var i = 0;
        var point = this.drawAPoint(list[i]);
        var route = routes[i];

        //start
        animate();


        function moveAnimation() {
            i = i + 1;
            if (i < list.length - 1) {
                console.log(i);
                console.log(list.length);
                _map.removeLayer("point");
                _map.removeSource('point');
                point = _this.drawAPoint(list[i]);
                route = routes[i];
                animate();
            }
        }

        function animate() {
            // Update point geometry to a new position based on counter denoting
            // the index to access the arc.
            point.features[0].geometry.coordinates =
                route.features[0].geometry.coordinates[counter];

            // Calculate the bearing to ensure the icon is rotated to match the route arc
            // The bearing is calculate between the current point and the next point, except
            // at the end of the arc use the previous point and the current point
            if (counter === steps - 1) {
                counter = 0;
                moveAnimation();
                return;
            }
            point.features[0].properties.bearing = turf.bearing(
                turf.point(
                    route.features[0].geometry.coordinates[
                        counter >= steps ? counter - 1 : counter
                        ]
                ),
                turf.point(
                    route.features[0].geometry.coordinates[
                        counter >= steps ? counter : counter + 1
                        ]
                )
            );

// Update the source with this new data.
            _map.getSource('point').setData(point);

// Request the next frame of animation so long the end has not been reached.
            if (counter < steps) {
                requestAnimationFrame(animate);
            }

            counter = counter + 1;
        }

        document.getElementById('replay').addEventListener('click', function() {
// Set the coordinates of the original point back to origin
            point.features[0].geometry.coordinates = origin;

// Update the source layer
            _map.getSource('point').setData(point);

// Reset the counter
            counter = 0;
            i = 0;
            route = routes[i];

// Restart the animation.
            animate(counter);
        });
    }

}
