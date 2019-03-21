import React, { Component } from 'react'

class Music extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFavorite: this._CheckIsFavorite(this.props.music)
        }
    }

    _CheckIsFavorite() {
        const {id} = this.props.music
        const favorites = JSON.parse(localStorage.getItem("favorites"))
        return favorites.reduce((acc, fav) => fav.id === id ? true : acc, false)
    }
    

    _AddToFavorites(e) {
        e.preventDefault();

        const {music} = this.props;
        const favorites = localStorage.getItem("favorites");

        if(favorites == undefined) {
            localStorage.setItem("favorites", JSON.stringify([music]))
        } else {
            localStorage.setItem("favorites", JSON.stringify([...JSON.parse(favorites), music]))
        }

        this.setState({
            isFavorite: true
        })
    }

    
    _RemoveFromFavorites(e) {
        e.preventDefault();

        const {id} = this.props.music
        const favorites = JSON.parse(localStorage.getItem("favorites"))
        const newFavorites = favorites.filter((music) => music.id !== id)


        localStorage.setItem("favorites", JSON.stringify(newFavorites))

        this.setState({
            isFavorite: false
        })
    }

    render() {
        const {isFavorite} = this.state
        const {music} = this.props
        const {album, artist} = music

        return (
            <div className="card w-50" style={{flex: 'initial'}}>
                <div className="card-body text-left">
                    <div className="media mb-2">
                        <img className="align-self-center mr-2 w-25" src={album.cover} alt=""/>
                        <div className="media-body">
                            <h5 className="card-title">{music.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{artist.name} / {album.title}</h6>
                        </div>
                    </div>
                    <audio src={music.preview} className="w-100" controls></audio><br/>
                    { !isFavorite ?
                        (<a onClick={(e) => this._AddToFavorites(e)} href="#" className="btn btn-sm btn-danger"><i className="fas fa-heart"></i> Ajouter aux favoris</a>)
                        :
                        (<a onClick={(e) => this._RemoveFromFavorites(e)} href="#" className="btn btn-sm btn-outline-danger"><i className="fas fa-close"></i> Supprimer des favoris</a>)
                    }
                </div>
            </div>
        )
    }
}

export default Music