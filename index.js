function dataLoad() {
  fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((res) => res.json())
    .then((data) => theyAre(data));
}

function theyAre(data) {
  const ul = document.getElementById("hablu");
  for (let user of data) {
    const li = document.createElement("li");
    li.innerText = user.email;
    ul.appendChild(li);
  }
}
