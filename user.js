function getUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => useUser(data));
}
getUser();

function useUser(users) {
  const getFather = document.getElementById("user-container");
  for (let user of users) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('style')
    newDiv.innerHTML = `
          <h3>Name: ${user.name}</h3>
          <p>Email: ${user.email}</p>
          <h4>Username: ${user.username}</h4>
          <p>Phone: ${user.phone}</p>
          <h4>Company: ${user.company.name}</h4>
          <p>City: ${user.address.city}</p>
          <h4>Website: ${user.website}</h4>
        `;
        getFather.appendChild(newDiv)
  }
}
