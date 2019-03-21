import React, { Component } from "react";

import {
    StyleSheet,
    View,
    TextInput,
    Button,
    FlatList,
    ActivityIndicator
} from "react-native";

import films from "../Helpers/FilmData";
import FilmItem from "./FilmItem";

import {getMovieFromApiWithSearchedText} from "../API/TMDBAPI"

class Search extends Component {

    constructor(props) {
        super(props)

        this.searchedText= ""
        this.page = 0
        this.totalPages = 0

        this.state = {
            films: [],
            isLoading: false
        }
    }

    _loadFilms() {
        const {searchedText, state: {films}} = this
        if(searchedText.length > 0) {
            this.setState({
                isLoading: true
            })

            getMovieFromApiWithSearchedText(searchedText, this.page + 1)
                .then(data => {
                    
                    this.page = data.page
                    this.totalPages = data.total_pages

                    this.setState({
                        films: [...films, ...data.results],
                        isLoading: false
                    })
                })
        }
    }

    _searchFilms() {
        this.page = 0
        this.totalPages = 0
        this.setState({
            films: []
        }, () => this._loadFilms())
    }

    _searchTextInputChange(text) {
        this.searchedText = text
    }

    render() {
        const {films, isLoading} = this.state

        return (
            <View style={styles.view}>
                <TextInput
                    style={styles.textinputs}
                    placeholder="Titre du film"
                    onChangeText={text => this._searchTextInputChange(text)}
                    onSubmitEditing={() => this._searchFilms()}
                />
                <Button title="Rechercher" onPress={() => this._loadFilms()} />


                <FlatList
                    data={films}
                    keyExtractor={item => item.id.toString()}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                            if(this.page < this.totalPages) {
                                this._loadFilms()
                            }
                        }}
                    renderItem={({ item }) => <FilmItem film={item}/>}
                />

                {isLoading
                    ? (
                        <View style={styles.loadingcontainer}>
                            <ActivityIndicator size="large" />
                        </View>
                    ) : null
                }


                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        marginTop: 20
    },

    textinputs: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: "#000",
        borderWidth: 1,
        paddingLeft: 5
    },

    loadingcontainer: {
        position: 'absolute',
        top: 100,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Search;
