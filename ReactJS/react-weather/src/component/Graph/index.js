import React, { Component } from "react"
import "./Graph.css"

class Graph extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hover: false
        }
    }

    render() {
        const { weatherInfos, handleClick, currentDt } = this.props;


        const temperature = Math.floor(weatherInfos.main.temp * 10) / 10

        const classesBase = "progress graph"
        const containerClasses = currentDt === weatherInfos.dt ? classesBase + " active" : classesBase

        return (
            <div 
                className={containerClasses}
                onClick={() => handleClick(weatherInfos.dt)}
                onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}
            >
                <div className="graph-infos">
                    <span className="graph-hour">{new Date(weatherInfos.dt * 1000).getUTCHours() + "h"}</span>
                    <img src={`http://openweathermap.org/img/w/${weatherInfos.weather[0].icon}.png`} alt="" className="graph-icon"/>
                    <span className="graph-temp">{temperature + "°C"}</span>
                </div>
                <div className="progress-bar bg-success" role="progressbar" style={{height: this.Percentage(temperature, -10, 30)}} ></div>
            </div>
        )
    }

    Percentage(input, min, max) {
        return((input - min) * 100) / (max - min)
    }
}

export default Graph
