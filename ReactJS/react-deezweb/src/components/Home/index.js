import React, { Component } from "react";
import fetchJSONP from "fetch-jsonp";
import Music from "../Music";

class Home extends Component {

    constructor(props) {
        super(props);
           
        this.state = {
            title: "",
            orderBy: "ALBUM_ASC",
            musics: []
        }
    }

    _setTitle({target: {value}}) {
        console.log("set title  = " + value)
        this.setState({
            title: value
        })
    }

    _setOrderBy({target: {value}}) {
        this.setState({
            orderBy: value
        })
    }

    _onSearch(e) {
        e.preventDefault();

        const {orderBy} = this.state
        const title = encodeURIComponent(this.state.title)

        const url = `https://api.deezer.com/search?q=${title}&order=${orderBy}&output=jsonp`;
        console.log(url)
        fetchJSONP(url)
            .then(res => res.json())
            .catch(err => console.log(err))
            .then(({data, error}) => {
                if(data)
                    this.setState({ musics: data })
                else 
                    console.error(error.message)
            })
    }


    render() {
        console.log(this.state)
        const {musics} = this.state
        return (
            <main className="container mt-3">
                <h1>Recherche</h1>
                <p>
                    Recherchez un titre sur Deezer en utilisant le
                    formulaire suivant :
                </p>
                <hr />
                <form onSubmit={e => this._onSearch(e)}>
                    <div className="row">
                        <label htmlFor="searchText" className="col-sm-2 col-form-label text-right" >
                            Titre&nbsp;:
                        </label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="searchText" placeholder="Eminem, Armin Van Buuren, Rihanna, ..."
                                onBlur={e => this._setTitle(e)}
                            />
                        </div>
                        <label htmlFor="searchText" className="col-sm-2 col-form-label text-right"
                        >
                            Trier par :
                        </label>
                        <div className="col-sm-2">
                            <select id="order" className="custom-select"
                                onBlur={e => this._setOrderBy(e)}
                            >
                                <option value="ALBUM_ASC">Album</option>
                                <option value="ARTIST_ASC">Artiste</option>
                                <option value="TRACK_ASC">Musique</option>
                                <option value="RANKING">Les plus populaires</option>
                                <option value="RATING_ASC">Les mieux notés</option>
                            </select>
                        </div>
                        <div className="col-sm-2 text-right">
                            <input type="submit" className="btn btn-primary" value="Go"
                            />
                        </div>
                    </div>
                </form>
                <hr />

                {!musics
                    ? <h3>Aucun résultat pour cette recherche ...</h3>
                    : <h2>Résultats</h2>}

                <div className="card-group search-results">
                    { musics.map((music, index) => (
                        <Music music={music} key={index} />
                    ))}
                </div>
            </main>
        );
    }
}

export default Home;
