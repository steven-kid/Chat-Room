const addBtn = document.querySelector("#add-btn")

addBtn.addEventListener('click', () => {
  let targetFriend = prompt('Please input the friend you want to add!');
  fetch(`http://127.0.0.1:8000/friend`, {
    method: "POST",
  }).then((res) => res.json())
  .then((response) => {
    if(response.status === 'ok'){
      alert("request send success");
    } else {
      alert("No such user in the DB");
    }
  })
})