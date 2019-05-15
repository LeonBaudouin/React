import React, { Component } from 'react';
import Graph from '../Graph';

import "./DayGroup.css"
import DateSpan from '../DateSpan';

class DayGroup extends Component {
    render() {

        const { dayInfos,
                dayPosition,
                currentDt,
                handleClick,
                handleNextDay,
                handlePreviousDay } = this.props

        return (
            <div className="day-group card-body p-0">
                <div className="day-infos p-5">
                    { dayPosition !== -1 
                        ? <img onClick={() => handlePreviousDay()} src="./svg/arrow.svg" alt="" className="day-before"/>
                        : <div></div>
                    }
                    <h4><DateSpan timestamp={dayInfos[0].dt * 1000}></DateSpan></h4>
                    { dayPosition !== 1
                        ? <img onClick={() => handleNextDay()} src="./svg/arrow.svg" alt="" className="day-after"/>
                        : <div></div>
                    }
                </div>
            {
                dayInfos
                .map((weatherInfos, index) => (
                    <Graph key={index} weatherInfos={weatherInfos} handleClick={handleClick} currentDt={currentDt}></Graph>
                ))
            }
            </div>
        )
    }
}

export default DayGroup;