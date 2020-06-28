// https://www.youtube.com/watch?v=ri5Nqe_IK50
// https://css-tricks.com/accessible-simple-responsive-tables
// https://css-tricks.com/responsive-data-tables/

// Data stored in array
// fcn to add movie data to array
// fcn to render all movie data
// fcn to sort movie data (takes a variable to say how to sort (title or rating))
// fcn to delete a movie data row and delete it from the storage array
//

// After DOM loads...
// $(function () {

const movieData = [
  { title: "A River Runs Through It", rating: 10 },
  { title: "Forrest Gump", rating: 6 },
  { title: "Wizard of Oz", rating: 7 },
  { title: "Titanic", rating: 10 },
  { title: "Airplane", rating: 9 },
  { title: "It's a Wonderful Life", rating: 10 },
];

// ******* SUBMIT FORM (event listener) *********
// 1. Add event listener to the form submit button
$("#movie-rating-form").on("submit", function (event) {
  //    a. prevent default submission behavior (see https://www.w3schools.com/jquery/event_preventdefault.asp#:~:text=The%20event.,button%20from%20submitting%20a%20form)
  event.preventDefault();

  const movie = createMovie();
  addMovie(movie);
  renderMovies(movieData);
});

// ******* DELETE MOVIE (event listener) *******
$("#movie-data").on("click", ".delete", function (event) {});

// ****** GET FORM DATA & CREATE NEW MOVIE *******
function createMovie() {
  // WORKS!!
  let movie = {
    id: 1,
    title: $("#movie-title").val(),
    rating: parseInt($("#movie-rating").val()),
  };
  return movie;
}

function addMovie(movie) {
  // WORKS!!
  movieData.push(movie);
  return movieData;
}

// ******** RENDER MOVIES *******
function renderMovies(movieData) {
  // WORKS!!
  $("#movies-data-body").empty();
  for (movie of movieData) {
    const row = `<tr><td scope="row">${movie.title}</td><td>${movie.rating}</td><td><button type="button" class="btn btn-danger delete">Delete</button></td></tr>`;
    $("#movies-data").append(row);
  }
}

// ********* DELETE MOVIE ********
function deleteMovie(movie) {}
