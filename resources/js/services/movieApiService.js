import axios from "axios";
import tmdbs from "../services/movieConstant";

const http = axios.create({
    baseURL: process.env.TMDB_URL,
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
    return (
        process.env.TMDB_IMG +
        (large ? movie.backdrop_path ?? movie.poster_path : movie.poster_path)
    );
}
