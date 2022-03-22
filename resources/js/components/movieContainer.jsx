import { getPoster } from "../services/movieApiService";

const MovieContainer = ({ movie }) => {
    return (
        <div
            className="group relative w-28 h-40 overflow-hidden rounded cursor-pointer"
            style={{ minWidth: "7rem" }}
        >
            <div className="absolute inset-0 group-hover:-inset-1 transition-all duration-300 ease">
                <img
                    className="h-full w-full object-cover bg-bottom"
                    src={getPoster(movie)}
                    alt="poster"
                />
                <div className="hidden group-hover:block concord-img-gradient"></div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 flex w-full h-full items-end p-2 text-white transition-all duration-300 ease-in-out">
                <h1 className="text-sm z-40">{movie.title ?? movie.name}</h1>
            </div>
        </div>
    );
};

export default MovieContainer;
