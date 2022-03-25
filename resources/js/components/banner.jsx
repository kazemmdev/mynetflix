import { useEffect, useState } from "react";
import { fetchNetflixOriginals, getPoster } from "../services/movieApiService";
import Spinner from "./spinner";

const Banner = () => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchNetflixOriginals().then((response) => {
            setMovie(
                response.data.results[
                    Math.floor(Math.random() * response.data.results.length - 1)
                ]
            );
        });
    }, []);

    if (movie) {
        return (
            <div className="relative border-b-8 border-gray-800 pt-40">
                <div className="absolute inset-0 -top-24 -z-0">
                    <img
                        className="h-full w-full object-cover bg-bottom overflow-hidden"
                        src={getPoster(movie)}
                        alt="poster"
                    />
                    <div className="concord-img-gradient"></div>
                </div>
                <div className="relative max-w-8xl pt-32 px-12 pb-12 flex flex-col justify-center w-full mx-auto text-white">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold mb-2">
                            {movie.title ?? movie.name}
                        </h1>
                        <p className="pt-2">{movie.overview}</p>
                    </div>
                </div>
            </div>
        );
    }

    return <Spinner />;
};

export default Banner;
