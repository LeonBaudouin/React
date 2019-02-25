import React, {Component} from "react"
import Graph from "../Graph"

import "./Results.css"
import DateSpan from "../DateSpan"
import Map from "../Map"
import DayGroup from "../DayGroup";

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

    daysFromWeather(weatherArray) {

        let daysArray = null

        weatherArray.forEach(currentWeather => {

            // Si il n'est pas vide
            if(daysArray) {

                // Chercher le dernier tableauJour
                let lastDay = daysArray[daysArray.length - 1]
                // Chercher le jour correspondant
                const lastDayIndex = new Date(lastDay[0].dt * 1000).getDay()
                const currentDayIndex = new Date(currentWeather.dt * 1000).getDay()


                // Si le jour courant et le jour précédent sont les même
                if(lastDayIndex === currentDayIndex) {
                    
                    lastDay.push(currentWeather)
                    daysArray[daysArray.length - 1] = lastDay
                    
                } else {
                    daysArray.push([currentWeather])
                }

            } else {
                daysArray = [[currentWeather]]
            }
        })

        return daysArray
    }
    

    render(){

        const {currentDt} = this.state
        const {weatherList, cityInfos} = this.props
        const currWeather = weatherList.reduce((acc, el) => el.dt === currentDt ? el : acc, {})

        const daysArray = this.daysFromWeather(weatherList)

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
                </div>
                <div className="card-footer weather-list p-0">
                    {
                        daysArray.map((dayInfos, index) => 
                            <DayGroup key={index} dayInfos={dayInfos} handleClick={this.handleClick} currentDt={currentDt}></DayGroup>
                        )
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
