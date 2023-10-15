const movies = [
    { title: "Inception", poster: "1.jpg" },
    { title: "The Shawshank Redemption", poster: "2.jpg" },
    { title: "The Dark Knight", poster: "3.jpg" },
    { title: "Pulp Fiction", poster: "4.jpg" },
    { title: "The Matrix", poster: "5.jpg" },
    { title: "Forrest Gump", poster: "11.jpg" },
    { title: "Fight Club", poster: "22.jpg" },
    { title: "Gladiator", poster: "33.jpg" },
    { title: "The Godfather", poster: "44.jpg" },
    { title: "Avatar", poster: "55.jpg" }
];

const movieList = document.getElementById("movie-list");

function displayMovies() {
    movieList.innerHTML = "";
    movies.forEach((movie) => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        const moviePoster = document.createElement("img");
        moviePoster.src = movie.poster;
        moviePoster.alt = movie.title;
        const movieTitle = document.createElement("p");
        movieTitle.textContent = movie.title;
        movieDiv.appendChild(moviePoster);
        movieDiv.appendChild(movieTitle);
        movieList.appendChild(movieDiv);
    });
}

displayMovies();

const content = [
    { type: "movie", title: "Inception", poster: "inception.jpg" },
    { type: "movie", title: "The Shawshank Redemption", poster: "shawshank.jpg" },
    { type: "tv-show", title: "Stranger Things", poster: "strangerthings.jpg" },
    { type: "movie", title: "Pulp Fiction", poster: "pulpfiction.jpg" },
    { type: "tv-show", title: "Breaking Bad", poster: "breakingbad.jpg" },
    { type: "movie", title: "The Dark Knight", poster: "darkknight.jpg" },
    { type: "tv-show", title: "Game of Thrones", poster: "gameofthrones.jpg" },
    { type: "movie", title: "The Matrix", poster: "matrix.jpg" },
    { type: "tv-show", title: "The Crown", poster: "thecrown.jpg" },
    { type: "movie", title: "Forrest Gump", poster: "forrestgump.jpg" },
];

const contentList = document.getElementById("content-list");

function displayContent() {
    contentList.innerHTML = "";
    content.forEach((item) => {
        const contentDiv = document.createElement("div");
        contentDiv.classList.add(item.type);
        const contentPoster = document.createElement("img");
        contentPoster.src = item.poster;
        contentPoster.alt = item.title;
        const contentTitle = document.createElement("p");
        contentTitle.textContent = item.title;
        contentDiv.appendChild(contentPoster);
        contentDiv.appendChild(contentTitle);
        contentList.appendChild(contentDiv);
    });
}

displayContent();
