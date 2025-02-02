//  *
//  * For each of the names in the array passed into this function
//  *
//  * - Add a <h1> tag to the website containing the name of the person
//  * - Add a <h2> tag to the website containing the job of the person
//  *
//  * All of your HTML should go inside the Div tag with the id "content".
//  *

//  <div id="content">
//      <h1>{Name}</h1>
//      <h2>{Job}</h2>
//  </div>

function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((person) => {
    const nameTitle = document.createElement("h1");
    const jobTitle = document.createElement("h2");
    nameTitle.textContent = person.name;
    jobTitle.textContent = person.job;
    content.appendChild(nameTitle);
    content.appendChild(jobTitle);
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  let content = document.querySelector("#content");
  const unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);

  shopping.forEach((shoppingList) => {
    let li = document.createElement("li");
    li.textContent = shoppingList;
    unorderedList.appendChild(li);
  });
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  // books.forEach(e=>
  //   {
  //     const paragraph=document.createElement("p")
  //     paragraph.textContent = e.title;
  //     paragraph.textContent=e.author;
  let content = document.querySelector("#content");
  const list = document.createElement("ul");
  content.appendChild(list);
  books.forEach((book) => {
    const listItems = document.createElement("li");
    const paragraph = document.createElement("p");
    const image = document.createElement("img");
    image.src = book.url;

    paragraph.textContent = book.title;
    paragraph.textContent = book.author;
    if (book.alreadyRead) {
      listItems.classList.add("alreadyRead");
    } else {
      listItems.classList.add("IHaventReadThisBook");
    }
    listItems.appendChild(paragraph);
    listItems.appendChild(image);
    list.appendChild(listItems);
  });
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    src: "",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

exerciseThree(books);
