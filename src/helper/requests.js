var API_KEY = "0d8ab7cff2692bd014bb25fca16d7158";

export var requests = {
    getNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    getCollection: (platform, endpoint) => `${platform}/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    getVideoById: (details) => `${details.platform}/${details.id}?api_key=${API_KEY}&language=en-US&page=1&append_to_response=videos`,
    getSimilarVideos: (platform, id) => `${platform}/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`,
    getRecommendedVideos: (platform, id) => `${platform}/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
    getGenreList: (platform) => `genre/${platform}/list?api_key=${API_KEY}&language=en-US`,
    getVideosByGenre: (platform, genreId) => `discover/${platform}?api_key=${API_KEY}&language=en-US&page=1&with_genres=${genreId}`
}


export const platform = {
    tv: "tv",
    movie: "movie"
}

export const endpoints = {
    popular: "popular",
    upcoming: "upcoming",
    topRated: "top_rated",
    nowPlaying: "now_playing",
    airingToday: "airing_today",
    onTheAir: "on_the_air"
}

