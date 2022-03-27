import React from 'react'
import {LocationPin} from '../LoactionPin/LocationPin'
import GoogleMapReact from 'google-map-react'
import './Map.css'


const Map = ({ location, zoomLevel }) => (
    <div className="map">
        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}   // TODO -- PAST THE GOOGLE  KEY
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
)

export default Map