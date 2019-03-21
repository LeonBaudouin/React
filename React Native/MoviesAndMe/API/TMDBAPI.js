const API_TOKEN = "6451f3a1a9199f71fb2be64e652a0711"

export function getMovieFromApiWithSearchedText(text , page) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&page=${page}&query=${text}`

    return fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error))
} 

export function getMoviePosterFromApi(path) {
    return 'https://image.tmdb.org/t/p/w300' + path
}