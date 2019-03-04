const API_TOKEN = "6451f3a1a9199f71fb2be64e652a0711"

export function getMovieFromApiWithSearcedText(text) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&page=1&query=${text}`

    return fetch(url)
} 