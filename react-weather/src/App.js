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
            weatherList: [],
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
                    weatherList: obj.list,
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

    handleInput = ({target : {value}}) => {
        this.setState({
            city: value
        })
    }


    render() {

        const {requestFailed} = this.state

        return (
            <div className="app">
                <Form handleForm={this.handleForm} handleInput={this.handleInput} />
                <div className="container">
                    
                    <h2 className="mt-5 mb-3 text-center">{ requestFailed ? "Pas de résultats" : "Liste des résultats"}</h2>

                    { !requestFailed && 
                        <Results weatherList={this.state.weatherList} cityInfos={this.state.cityInfos} />
                    }
                </div>
            </div>
        )
    }

}

export default App