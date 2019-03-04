import React, { Component } from 'react'
import {key} from "../../config.json"

import "./Map.css"

class Map extends Component {
    render() {
        const {
            coords,
            zoom,
            title,
            width,
            height
        } = this.props

        const center = `${coords.lat},${coords.lon}`
        const size = `${width},${height}`

        return (
            <img
                className="map card-img-top"
                src={`https://open.mapquestapi.com/staticmap/v4/getmap?key=${key.mapquest}&size=${size}&zoom=${zoom}&center=${center}`}
                alt={title}
            />

            // <img 
            //     src={`https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${zoom}&size=${size}&key=${key.map}`}
            //     alt={title}
            // />

            // <iframe
            //     src={`https://maps.google.com/maps?q=${coords.lat},${coords.lon}&t=k&z=${zoom}&=hl=fr&output=embed`}
            //     frameborder="0"
            //     scrolling="no"
            //     width={width} height={height} title={title}>
            // </iframe>
        )
    }
}

export default Map