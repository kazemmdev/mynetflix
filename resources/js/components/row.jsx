import { useEffect, useRef, useState } from "react";
import { fetchMovies } from "../services/movieApiService";
import MovieContainer from "./movieContainer";
import leftSvg from "../../assets/left.svg";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const refMovies = useRef();
    const refContainer = useRef();
    const [movies, setMovies] = useState(null);
    const [scroll, setScroll] = useState(0);
    const [markerLeftVisible, setMarkerLeftVisible] = useState(false);
    const [markerRightVisible, setMarkerRightVisible] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await fetchMovies(fetchUrl).then((response) => {
                setMovies(response.data.results);
            });
        };
        fetchData();
    }, [fetchUrl]);

    const stepCalculator = (size) => {
        return size * 112 + (size - 1) * 20;
    };

    const handleScrollLeft = () => {
        const leftStep =
            scroll < stepCalculator(2) ? scroll + stepCalculator(2) : 0;

        refMovies.current.style.transform = `translateX(${leftStep}px)`;

        setScroll(leftStep);
        handleMarkerVisibilty(leftStep);
    };

    const handleScrollRight = () => {
        const moviesCount = movies.length;
        const moviesWidth = stepCalculator(moviesCount);
        const containerWidth = refContainer.current.clientWidth;

        const rightStep =
            -scroll < moviesWidth - containerWidth - stepCalculator(2)
                ? scroll - stepCalculator(2)
                : containerWidth - moviesWidth;

        refMovies.current.style.transform = `translateX(${rightStep}px)`;

        setScroll(rightStep);
        handleMarkerVisibilty(rightStep);
    };

    const handleMarkerVisibilty = (step) => {
        const moviesCount = movies.length;
        const moviesWidth = stepCalculator(moviesCount);
        const containerWidth = refContainer.current.clientWidth;

        if (step === 0) {
            setMarkerLeftVisible(false);
        } else if (step === containerWidth - moviesWidth) {
            setMarkerRightVisible(false);
        } else {
            setMarkerLeftVisible(true);
            setMarkerRightVisible(true);
        }
    };

    return (
        <div className="pb-8 relative overflow-hidden" ref={refContainer}>
            <h3 className="text-xl text-white font-bold">{title}</h3>
            <div className="absolute inset-y-0 left-0 z-20 flex">
                <div
                    className={
                        "marker-bg" + (markerLeftVisible ? " flex" : " hidden")
                    }
                    onClick={handleScrollLeft}
                >
                    <img src={leftSvg} alt="" />
                </div>
            </div>
            <div
                className="flex space-x-5 my-2 transition-all duration-200 ease-in-out"
                ref={refMovies}
            >
                {movies?.map((item, index) => (
                    <MovieContainer movie={item} key={index} />
                ))}
            </div>
            <div className="absolute inset-y-0 -right-1 z-20 flex">
                <div
                    className={
                        "marker-bg rotate-180" +
                        (markerRightVisible ? " flex" : " hidden")
                    }
                    onClick={handleScrollRight}
                >
                    <img src={leftSvg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Row;
