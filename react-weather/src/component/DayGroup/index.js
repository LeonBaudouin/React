import React, { Component } from 'react';
import Graph from '../Graph';

import "./DayGroup.css"

class DayGroup extends Component {
    render() {
        const {dayInfos, currentDt, handleClick} = this.props
        return (
            <div className="day-group">
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