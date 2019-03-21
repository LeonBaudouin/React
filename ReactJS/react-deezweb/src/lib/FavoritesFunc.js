export function getFavorites() {
    const favorites = localStorage.getItem("favorites")
    return favorites ? JSON.parse(favorites) : []
}

export function setFavorites(array) {
    localStorage.setItem("favorites", JSON.stringify(array));
}