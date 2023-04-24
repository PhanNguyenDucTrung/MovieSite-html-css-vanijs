// Get the watchlist movies container and add a click event listener to it
const watchlistMovies = document.querySelector('.watchlist-movies');
watchlistMovies.addEventListener('click', event => {
    // Check if the clicked element is a "Remove from Watchlist" button
    if (event.target.classList.contains('remove-from-watchlist-btn')) {
        // Get the clicked button's parent element (i.e. the movie component)
        const movieComponent = event.target.parentNode.parentNode;
        // Remove the movie component from the watchlist
        movieComponent.remove();
    }
});
// document.addEventListener('DOMContentLoaded', () => {
//     // Get all movie components in the watchlist
//     const movieComponents = document.querySelectorAll('.watchlist-movie');

//     // Set a variable to keep track of the current position of the animation
//     let currentTranslate = 0;

//     // Set the width of the container and the total number of movie components
//     const containerWidth = 600;
//     const totalMovies = movieComponents.length;

//     // Define a function to animate the movie components
//     function animateMovies() {
//         // Translate all movie components to the left
//         currentTranslate -= 200;
//         movieComponents.forEach(movie => {
//             movie.style.transform = `translateX(${currentTranslate}px)`;
//             // Check if the movie component has disappeared from the left side of the container
//             if (movie.offsetLeft + movie.offsetWidth < 0) {
//                 // Calculate the new position of the movie component and move it to the right side of the container
//                 currentTranslate += totalMovies * 200;
//                 movie.style.transform = `translateX(${currentTranslate}px)`;
//             }
//         });
//     }

//     // Define a function to initialize the starting position of the movie components
//     function initMoviePositions() {
//         movieComponents.forEach((movie, index) => {
//             movie.style.transform = `translateX(${index * 200}px)`;
//         });
//     }

//     // Call the initMoviePositions() function to initialize the starting position of the movie components
//     initMoviePositions();

//     // Call the animateMovies() function every 2 seconds using setInterval()
//     setInterval(animateMovies, 2000);
// });
