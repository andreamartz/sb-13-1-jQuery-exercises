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
// when delete button is clicked, remove the parent tr and remove the movie from movieData
$("#movies-data-body").on("click", ".delete", function (event) {
  // WORKS!!
  const $row = $(event.target).closest("tr");
  $targetTitle = $row.children().eq(0).text();
  const indexToRemove = movieData.findIndex(
    (movie) => movie.title === $targetTitle
  );
  movieData.splice(indexToRemove, 1);
  $row.remove();
});

// ****** GET FORM DATA & CREATE NEW MOVIE *******
function createMovie() {
  // WORKS!!
  if ($("#movie-title").val().length < 2) {
    return;
  }
  let title = $("#movie-title").val();
  let rating = parseInt($("#movie-rating").val());

  let movie = { title, rating };

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

// ***** ADD listener to sort *****
$(".fa").on("click", function (event) {
  console.log(event.target);
  const keyToSort = $(event.target).attr("data-sort");
  console.log("key to sort: ", keyToSort);
  const sortDirection = $(event.target).hasClass("fa-sort-down")
    ? "down"
    : "up";

  sortMovies(movieData, keyToSort, sortDirection);

  $(event.target).toggleClass("fa-sort-down");
  $(event.target).toggleClass("fa-sort-up");
});

// ****** SORT MOVIES ************

function sortMovies(movieData, keyToSort, sortDirection) {
  movieData.sort((a, b) => {
    // a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    if (keyToSort === "rating") {
      a[keyToSort] = +a[keyToSort];
      b[keyToSort] = +b[keyToSort];
    }
    if (a[keyToSort] < b[keyToSort]) {
      return sortDirection === "up" ? -1 : 1;
    } else if (a[keyToSort] > b[keyToSort]) {
      return sortDirection === "up" ? 1 : -1;
    } else {
      return 0;
    }
  });
  renderMovies(movieData);
  return movieData;
}

// ********* DELETE MOVIE ********
// function deleteRow($row) {
//   $row.remove();
// }
