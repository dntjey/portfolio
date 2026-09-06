// База фільмів
const movies = [
    {
        title: "Interstellar",
        year: 2014,
        rating: 8.7,
        genres: "Sci-Fi, Drama"
    },
    {
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        genres: "Action, Crime, Drama"
    },
    {
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genres: "Sci-Fi, Action, Thriller"
    },
    {
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        genres: "Sci-Fi, Action"
    },
    {
        title: "Forrest Gump",
        year: 1994,
        rating: 8.8,
        genres: "Drama, Romance"
    },
    {
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genres: "Drama"
    },
    {
        title: "Gladiator",
        year: 2000,
        rating: 8.5,
        genres: "Action, Drama"
    },
    {
        title: "The Prestige",
        year: 2006,
        rating: 8.5,
        genres: "Drama, Mystery, Thriller"
    },
    {
        title: "Parasite",
        year: 2019,
        rating: 8.5,
        genres: "Drama, Thriller"
    },
    {
        title: "Whiplash",
        year: 2014,
        rating: 8.5,
        genres: "Drama, Music"
    },
    {
        title: "Dune",
        year: 2021,
        rating: 8.0,
        genres: "Sci-Fi, Adventure"
    },
    {
        title: "Oppenheimer",
        year: 2023,
        rating: 8.6,
        genres: "Drama, History"
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        rating: 8.4,
        genres: "Animation, Action"
    },
    {
        title: "The Grand Budapest Hotel",
        year: 2014,
        rating: 8.1,
        genres: "Comedy, Drama"
    },
    {
        title: "Mad Max: Fury Road",
        year: 2015,
        rating: 8.1,
        genres: "Action, Adventure"
    },
    {
        title: "Knives Out",
        year: 2019,
        rating: 7.9,
        genres: "Mystery, Comedy"
    },
    {
        title: "The Truman Show",
        year: 1998,
        rating: 8.2,
        genres: "Drama, Comedy, Sci-Fi"
    },
    {
        title: "Interstellar",
        year: 2014,
        rating: 8.7,
        genres: "Sci-Fi, Drama"
    },
    {
        title: "The Wolf of Wall Street",
        year: 2013,
        rating: 8.2,
        genres: "Biography, Comedy, Crime"
    },
    {
        title: "Fight Club",
        year: 1999,
        rating: 8.8,
        genres: "Drama"
    }
];


function getRandomMovie() {

    const randomIndex = Math.floor(Math.random() * movies.length);

    return movies[randomIndex];
}


function showRandomMovie(platform) {

    const movie = getRandomMovie();

    const result = document.getElementById(`${platform}-result`);

    result.innerHTML = `
        <h5>🍿 ${movie.title}</h5>
        <p>📅 ${movie.year}</p>
        <p>⭐ IMDb: ${movie.rating}/10</p>
        <p>🎭 ${movie.genres}</p>
    `;
}