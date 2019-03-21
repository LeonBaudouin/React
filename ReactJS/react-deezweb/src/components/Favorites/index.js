import React, { Component } from 'react'
import Music from '../Music';

class Favorites extends Component {

    render() {
        const favorites = JSON.parse(localStorage.getItem("favorites"));

        return (
            <main className="container mt-3">
                <h1>Vos Favoris</h1>
                <p>Vous pouvez retrouvez tous vos favoris ici :</p>
                <hr/>
                <div className="card-group search-results">
                    { favorites.map((music, index) => (
                        <Music music={music} key={index} />
                    ))}
                </div>
            </main>
        )
    }
}

export default Favorites;