const STORAGE_FAVORITE_KEY = "deezweb.favorites";

export default {

    getFavoritesFromStorage() {
        const favorites = localStorage.getItem(STORAGE_FAVORITE_KEY);
        return favorites ? JSON.parse(favorites) : [];
    },

    setFavoritesArrayInStorage(array) {
        localStorage.setItem(STORAGE_FAVORITE_KEY, JSON.stringify(array));
    },

    // Vérifie si une musique se trouve dans les favoris
    isFavorite(music) {
        const {id} = music
        const favorites = this.getFavoritesFromStorage()
        return favorites.find(fav => fav.id === id) !== undefined
    },

    // Permet d'ajouter/supprimer un favori du localStorage
    toggleFavorite(music) {
        if(this.isFavorite(music))
            this.removeFavoriteFromStorage(music)
        else
            this.addFavoriteToStorage(music)
    },

    // Ajoute un favori au localStorage
    addFavoriteToStorage(music) {
        const favorites = this.getFavoritesFromStorage()
        this.setFavoritesArrayInStorage([...favorites, music])
    },

    // Supprime un favori du localStorage
    removeFavoriteFromStorage(music) {
        const {id} = music
        const favorites = this.getFavoritesFromStorage()
        const newFavorites = favorites.filter((music) => music.id !== id)
        this.setFavoritesArrayInStorage(newFavorites)
    }
};
