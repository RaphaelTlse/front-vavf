// in src/Map.js
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import mapboxgl from 'mapbox-gl';
import carMoving from './drawingMovingCar';

mapboxgl.accessToken = 'pk.eyJ1IjoicGF1bG8yMjA2IiwiYSI6ImNrNXhtZjdkNDBrYWYzcG54OGxldHF5dG0ifQ.luGNGGrYltlVEhd8QUgTZQ';
var coordinates = document.getElementById('coordinates');
var bool = true;
var _map;

export class Map extends React.Component {
    // Code from the next few steps will go here



    constructor(props) {
        super(props);
        this.state = {
            lng: 2.5,
            lat: 47,
            zoom: 5.15
        };
    }

    componentDidMount() {

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
        console.log(map);
        _map = map;

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });

        });

        map.on('load', function() {

            map.on("click", function(e) {
                //addMarker(e.lngLat);
            });


            var car = new carMoving(_map);
        });

    }

    addMarker()
    {
        var popup = new mapboxgl.Popup({ offset: 25 }).setText(
            'Accident 456 ligne 34'
        );

        var lng = document.getElementById("lng").value;
        var lat = document.getElementById("lat").value;

        var marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([lng, lat])
            .setPopup(popup)
            .addTo(_map);

        marker.on('dragend', onDragEnd);

        function onDragEnd() {
            var lngLat = marker.getLngLat();
            /* coordinates.style.display = 'block';
            coordinates.innerHTML =
                'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;*/
        }
    }

    render() {
        return (
            <div>
                <div className="overlay">
                    <button id="replay">Replay</button>
                </div>
                <div className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div className='sidebarSearch'>
                    <input className="textInput" type='text' id='lng' placeholder="longitude"/>
                    <input className="textInput" type='text' id='lat' placeholder="latitude"/>
                    <div className="searchButton">
                        <button onClick={this.addMarker}>Create new pin</button>
                    </div>
                </div>
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
    )
    }
}
