import { API_Key, client } from './getData'

class getMovies {

    getMoviesByCategory(categoryName) {
        let response = client.get(`movie/${categoryName}?api_key=${API_Key}`)
        .then(ress => {
            return ress
        })
        .catch(err => {
            return err
        })
        return response
    }
}

export default new getMovies()