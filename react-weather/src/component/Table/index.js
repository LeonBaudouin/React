import React from "react";

const Table = ({weatherInfos, city}) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col"></th>
                    <th scope="col">Description</th>
                    <th scope="col">Température</th>
                    <th scope="col">Vent</th>
                </tr>
            </thead>
            <tbody>
                {
                    weatherInfos
                        .map((element, index) => {

                        return (<tr key={index}>
                            <th scope="row">{new Date(element.dt * 1000).toLocaleString().split(":")[0] + "h" }</th>
                            <td><img src={`http://openweathermap.org/img/w/${element.weather[0].icon}.png`} alt=""></img></td>
                            <td>{element.weather[0].description}</td>
                            <td>{Math.floor(element.main.temp * 10) / 10 + " °C"}</td>
                            <td>{Math.floor(element.wind.speed * 36) / 10 + " km/h"}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default Table
