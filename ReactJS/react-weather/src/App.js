import React, { Component } from 'react'

import './App.css'
import Form from "./component/Form"
import Results from "./component/Results"
import {key} from "./config"


class App extends Component {

    constructor() {
        super()

        this.state = {
            city: " ",
            cityInfos: null,
            dayList: [],
            requestFailed: true
        }
    }


    handleForm = (e) => {

        e.preventDefault()

        const city = encodeURIComponent(this.state.city)
        const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${key.weather}&q=${city}&units=metric`

        fetch(url)
            .then(res => res.json())
            
            // En cas de succès
            .then((obj) => {
                if(obj.cod === "404") {
                    return Promise.reject()
                }
                this.setState({
                    dayList: this.daysFromWeather(obj.list),
                    cityInfos: obj.city,
                    requestFailed: false
                })
            })

            // En cas d'échec
            .catch(() => {
                this.setState({
                    requestFailed: true
                })
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

    handleInput = ({target : {value}}) => {
        this.setState({
            city: value
        })
    }


    render() {

        const {requestFailed, dayList, cityInfos} = this.state

        return (
            <div className="app">
                <Form handleForm={this.handleForm} handleInput={this.handleInput} />
                <div className="container">
                    
                    <h2 className="mt-5 mb-3 text-center">{ requestFailed ? "Pas de résultats" : "Liste des résultats"}</h2>

                    { !requestFailed && 
                        <Results dayList={dayList} cityInfos={cityInfos} />
                    }
                </div>
            </div>
        )
    }

}

export default App