import React, { Component } from 'react';


const DAYS = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"
]

const MONTH = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
] 

class DateSpan extends Component {

    render() {

        const {timestamp} = this.props

        const date = new Date(timestamp)
        const dateString = DAYS[date.getDay()] + " " + date.getDate() + " " + MONTH[date.getMonth()]

        return <span>{dateString}</span>
    }
}

export default DateSpan;