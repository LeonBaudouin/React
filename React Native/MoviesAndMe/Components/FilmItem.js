import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { getMoviePosterFromApi } from "../API/TMDBAPI";

class FilmItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const {film} = this.props

        return (
            <View style={Styles.container}>
                <Image style={Styles.image}
                    source={{uri: getMoviePosterFromApi(film.poster_path)}}
                />
                <View style={Styles.infos}>
                    <View style={Styles.header}>
                        <Text style={Styles.title}>{film.title}</Text>
                        <Text style={Styles.note}>{film.vote_average}</Text>
                    </View>
                    <View style={Styles.descriptionContainer}>
                        <Text style={Styles.description} numberOfLines={6}>
                            {film.overview}
                        </Text>
                    </View>
                    <View style={Styles.dateContainer}>
                        <Text style={Styles.date}>Sorti le {film.release_date}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    image: {
        height: 200,
        backgroundColor: "grey",
        margin: 5,
        flex: 1
    },
    infos: {
        flexDirection: "column",
        margin: 5,
        flex: 2
    },
    header: {
        flex: 1,
        flexDirection: "row",
    },
    title: {
        flex: 1,
        flexWrap: "wrap",
        fontSize: 20
    },
    note: {
        fontWeight: "bold",
        fontSize: 26,
        color: "#666"
    },
    descriptionContainer: {
        flex: 7,
    },
    description: {
        fontStyle: 'italic',
        color: "#666"
    },
    dateContainer: {
        flex: 1
    },
    date: {
        textAlign: "right"
    }
})

export default FilmItem;
