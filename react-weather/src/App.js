import React, { Component } from 'react'

import './App.css'
import Form from "./component/Form"
import Table from "./component/Table"
import config from "./config"


class App extends Component {

    constructor() {
        super()

        this.state = {
            city: " ",
            weatherInfos: [],
            requestFailed: false
        }
    }

    handleForm = (e) => {
        e.preventDefault()

        const city = encodeURIComponent(this.state.city)
        const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${config.id}&q=${city}&units=metric`

        fetch(url)
            .then(res => res.json())
            .then((obj) => {
                if(obj.cod === "404") {
                    return Promise.reject()
                }
                this.setState({
                        weatherInfos: obj.list,
                    requestFailed: false
                })
            })
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
            <div className="container">
                <h1 className="my-5">App Météo</h1>
                <Form handleForm={this.handleForm} handleInput={this.handleInput} />
                
                <h2 className="mt-5 mb-3">{ requestFailed ? "Pas de résultats" : "Liste des résultats"}</h2>
                { !requestFailed && <Table weatherInfos={this.state.weatherInfos} city={this.state.city} /> }
            </div>
        )
    }

}

export default App