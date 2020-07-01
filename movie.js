const movieData = [];

// ******* SUBMIT FORM (event listener) *********
$("#movie-rating-form").on("submit", function (event) {
  event.preventDefault();

  const movie = createMovie();
  addMovie(movie);
  renderMovies(movieData);
});

// ******* DELETE MOVIE (event listener) *******
// when delete button is clicked, remove the parent tr and remove the movie from movieData
$("#movies-data-body").on("click", ".delete", function (event) {
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
  if ($("#movie-title").val().length < 2) {
    return;
  }
  let title = $("#movie-title").val();
  let rating = parseInt($("#movie-rating").val());

  let movie = { title, rating };

  return movie;
}

function addMovie(movie) {
  movieData.push(movie);
  return movieData;
}

// ******** RENDER MOVIES *******
function renderMovies(movieData) {
  $("#movies-data-body").empty();
  for (movie of movieData) {
    const row = `<tr><td scope="row">${movie.title}</td><td>${movie.rating}</td><td><button type="button" class="btn btn-danger delete">Delete</button></td></tr>`;
    $("#movies-data").append(row);
  }
}

// ***** ADD listener to sort *****
$(".fa").on("click", function (event) {
  const keyToSort = $(event.target).attr("data-sort");
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
