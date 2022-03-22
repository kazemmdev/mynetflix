import axios from "axios";
import tmdbs from "../services/movieConstant";

const apiUrl = process.env.TMDB_API;
const imgUrl = process.env.TMDB_IMG;

const http = axios.create({
    baseURL: apiUrl,
});

export function fetchTrending() {
    return http.get(tmdbs.trending.url);
}

export function fetchNetflixOriginals() {
    return http.get(tmdbs.netflix.url);
}

export function fetchTopRated() {
    return http.get(tmdbs.top.url);
}

export function fetchActionMovies() {
    return http.get(tmdbs.action.url);
}

export function fetchComedyMovies() {
    return http.get(tmdbs.comedy.url);
}

export function fetchHorrorMovies() {
    return http.get(tmdbs.horror.url);
}

export function fetchRomanceMovies() {
    return http.get(tmdbs.romance.url);
}

export function fetchDocumentaries() {
    return http.get(tmdbs.documentary.url);
}

export function fetchMovies(url) {
    return http.get(url);
}

export function getPoster(movie, large = true) {
    return imgUrl + (large ? movie?.poster_path : movie?.backdrop_path);
}
