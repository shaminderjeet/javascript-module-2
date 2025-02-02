/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
const selectDiv = document.getElementById("all-movies");
const movieNumber = document.getElementById("movies-number");
function showMovies() {
  console.log("showMovies")
  movies.forEach((e) => {
    const paragraph = document.createElement("p");
    const infoTitle = e.title + " " + e.director;
    paragraph.innerText = infoTitle;
    selectDiv.appendChild(paragraph);
movieNumber.innerText = movies.length;
    //  console.log(movieNumber)
    })
    
  };
  

const myMovie = {
  title: "spiderman",
  director: "si",
  type: "adventures",
  haveWatched: true,
};

const addMovie = (movie) => {
  console.log("addMovie");
  // setTimeout(() => {
    movies.push(movie);
    // console.log(movies);
  };
  setTimeout(() => {
    showMovies()
  }, 500);
setTimeout(() => {
  addMovie(myMovie);
 }, 200);
 
 const  form = document.createElement("form");
 // Create an input element for Full Name
 const titleInput = document.createElement("input");
titleInput.setAttribute("type", "text");
titleInput.setAttribute("name", "title");
titleInput.setAttribute("placeholder", "title");

 const directorInput = document.createElement("input");
 directorInput.setAttribute("type", "text");
 directorInput.setAttribute("name", "director");
 directorInput.setAttribute("placeholder", "director");

 const typeInput = document.createElement("input");
 typeInput.setAttribute("type", "text");
 typeInput.setAttribute("name", "type");
 typeInput.setAttribute("placeholder", "type");

 const haveWatchedInput = document.createElement("input");
 haveWatchedInput.setAttribute("type", "text");
 haveWatchedInput.setAttribute("name", "haveWatched");
 haveWatchedInput.setAttribute("placeholder", "haveWatched");

 
 const saveButton = document.createElement("input");
 saveButton.setAttribute("type", "submit");
 saveButton.setAttribute("name", "haveWatched");
  saveButton.setAttribute("value", "Save");
  saveButton.addEventListener("click",(e) =>{

    e.preventDefault()
    var myMovie=
    {
      title: titleInput.value,
      director:directorInput.value ,
      type: typeInput.value,
      haveWatched:haveWatchedInput.value ,
    }
    //console.log( "title",titleInput.value)
// movies.push(myMovie)
addMovie(myMovie)
console.log(movies)
showMovies()
})
form.appendChild(titleInput)
 form.appendChild(directorInput)
 form.appendChild(typeInput) 
 form.appendChild(haveWatchedInput)
 form.appendChild(saveButton)
 selectDiv.appendChild(form)





