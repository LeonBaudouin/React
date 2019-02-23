import React, {Component} from "react"
import Graph from "../Graph"

import "./Results.css"
import DateSpan from "../DateSpan"
import Map from "../Map"

class Results extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentDt: props.weatherList[0].dt
        }
    }

    handleClick = (dt) => {
        this.setState({
            currentDt: dt
        })
    }

    render(){

        const {currentDt} = this.state
        const {weatherList, cityInfos} = this.props
        const currWeather = weatherList.reduce((acc, el) => el.dt === currentDt ? el : acc, {})

        // const temperature = Math.floor(currWeather.main.temp * 10) / 10

        return (
            <div className="results card">
                <h5 className="card-header text-center">
                    {cityInfos.name}
                </h5>
                <Map
                    coords={cityInfos.coord}
                    zoom={13}
                    title="Map"
                    width="1200"
                    height="600"
                    >
                </Map>
                <div className="card-body position-relative">
                    <h5 className="day">
                        <span class="badge badge-primary mr-2">{new Date(currWeather.dt * 1000).getUTCHours() + "h"}</span>
                        <DateSpan timestamp={currWeather.dt * 1000}></DateSpan>
                    </h5>
                    <p className="m-0">
                        <img src={`http://openweathermap.org/img/w/${currWeather.weather[0].icon}.png`} alt="" className="icon"/>
                        {this.getDescription(currWeather)}
                    </p>
                    {/* <h6 className="mb-2 text-muted position-absolute">{new Date(currWeather.dt * 1000).getUTCHours() + "h"}</h6> */}
                </div>
                <div className="card-footer weather-list p-0">
                    {
                        weatherList
                        .map((weatherInfos, index) => (
                            <Graph key={index} weatherInfos={weatherInfos} handleClick={this.handleClick} currentDt={currentDt}></Graph>
                        ))
                    }
                </div>
            </div>
        )
    }

    getDescription({weather: [{description}]}) {
        return description.charAt(0).toUpperCase() + description.slice(1);
    }
}

export default Results
