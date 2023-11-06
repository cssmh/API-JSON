function commentsLoad() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => getComments(data));
}
commentsLoad();

function getComments(comm) {
  const appendFather = document.getElementById("comments-container");
  for (let com of comm) {
    const commDiv = document.createElement("div");
    commDiv.classList.add('box'); // box class add
    
    commDiv.innerHTML = `
    <h3>id: ${com.id}</h3>
    <p>name: ${com.name}</p>
    <p>Email: ${com.email}</p>
    <p>Desc: ${com.body}</p>
        `;
    appendFather.appendChild(commDiv);
  }
}