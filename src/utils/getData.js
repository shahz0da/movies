import Axios from 'axios'
export const API_Key = "51cc7f5f459038d8f6fd27150449d6a1"
export const BaseUrl = "https://api.themoviedb.org/3/"
export const BaseUrlImages = "https://image.tmdb.org/t/p"
export const file_size = "/w500"
//  https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

export const client = Axios.create({
    baseURL: BaseUrl
})

// https://api.themoviedb.org/3/movie/popular?api_key=51cc7f5f459038d8f6fd27150449d6a1&language=en-US&page=1