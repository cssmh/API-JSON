function postLoad() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => postDisplay(data));
}
postLoad();

function postDisplay(data) {
  const postContainer = document.getElementById("post-container");
  for (let post of data) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
        <h4>User id: ${post.id}</h4>
        <h5>title: ${post.title}</h5>
        <p>Description: ${post.body}</p>
        `;
    postContainer.appendChild(postDiv);
  }
}