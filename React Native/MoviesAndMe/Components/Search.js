import React, { Component } from "react";

import {
    StyleSheet,
    View,
    TextInput,
    Button,
    FlatList
} from "react-native";

import films from "../Helpers/FilmData";
import FilmItem from "./FilmItem";

import {getMovieFromApiWithSearcedText} from "../API/TMDBAPI"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    _loadFilms() {
        getMovieFromApiWithSearcedText("star").then(data => console.log(data))
    }

    render() {
        return (
            <View style={styles.view}>
                <TextInput
                    style={styles.textinputs}
                    placeholder="Titre du film"
                    // onBlur={}
                />
                <Button title="Rechercher" onPress={() => this._loadFilms()} />

                <FlatList
                    data={films}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item}/>}
                />
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
    }
});

export default Search;
