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
            currentDt: props.dayList[0][0].dt,
            currentDay: 0
        }
    }

    handleClick = (dt) => {
        this.setState({
            currentDt: dt
        })
    }

    handleNextDay = () => {
        const {currentDay} = this.state
        const {dayList} = this.props
        
        if(currentDay < dayList.length - 1) {
            this.setState({
                currentDay: currentDay + 1
            })
        }
    }

    handlePreviousDay = () => {
        const {currentDay} = this.state

        if(currentDay > 0) {
            this.setState({
                currentDay: currentDay - 1
            })
        }
    }
    

    render(){

        const {currentDt, currentDay} = this.state
        const {dayList, cityInfos} = this.props
        
        let dayPosition;

        if(currentDay === 0) {
            dayPosition = -1
        } else if(currentDay === dayList.length -1) {
            dayPosition = 1
        } else {
            dayPosition = 0
        }

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
                    {
                        dayList
                        .filter(dayInfos => {
                            const lastDayIndex = new Date(dayInfos[0].dt * 1000).getDay()
                            const currentDayIndex = new Date(dayList[currentDay][0].dt * 1000).getDay()
                            return lastDayIndex === currentDayIndex
                        })
                        .map((dayInfos, index) => 
                            <DayGroup 
                                key={index}
                                dayInfos={dayInfos}
                                dayPosition={dayPosition}

                                handleClick={this.handleClick}
                                handleNextDay={this.handleNextDay}
                                handlePreviousDay={this.handlePreviousDay}
                                
                                currentDt={currentDt}
                                currentDay={currentDay}>
                            </DayGroup>
                        )
                    }
            </div>
        )
    }

    getDescription({weather: [{description}]}) {
        return description.charAt(0).toUpperCase() + description.slice(1);
    }
}

export default Results
