const key = process.env.TMDB_KEY;

const requests = {
    trending: {
        title: "Trending",
        url: `/trending/movie/week?api_key=${key}&language=en-US`,
    },
    netflix: {
        title: "Netflix Originals",
        url: `/discover/tv?api_key=${key}&with_networks=123`,
    },
    top: {
        title: "Top Ranked",
        url: `/movie/top_rated?api_key=${key}&language=en-US`,
    },
    action: {
        title: "Action Movies",
        url: `/discover/movie?api_key=${key}&with_genres=28`,
    },
    comedy: {
        title: "Comedy Movies",
        url: `/discover/movie?api_key=${key}&with_genres=35`,
    },
    horror: {
        title: "Horror Movies",
        url: `/discover/movie?api_key=${key}&with_genres=27`,
    },
    romance: {
        title: "Romance Movies",
        url: `/discover/movie?api_key=${key}&with_genres=10749`,
    },
    documentary: {
        title: "Documentary Movies",
        url: `/discover/movie?api_key=${key}&with_genres=99`,
    },
};

export default requests;
