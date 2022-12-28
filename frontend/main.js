const url = window.location.href;
const currentUser = parseInt(url.split("=")[1]);
const userList = document.querySelector("#users");
const messagePanel = document.querySelector(".chat-messages");

let friends;

async function getData() {
  let btns = [];
  await fetch(`http://127.0.0.1:8000/friends?${currentUser}`, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      friends = data;
      for ({ userName, friendID: userId } of friends) {
        const temp = document.createElement("button");
        temp.textContent = userName;
        temp.className = `${userName}-${userId}`;
        btns.push(temp);
        console.log(btns.length);
        userList.appendChild(temp);
      }
    });
  return btns;
}

{
  /* <div class="message">
      <p class="meta">Brad <span>9:12pm</span></p>
      <p class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        repudiandae.
      </p>
    </div> */
}

getData().then((btns) => {
  btns.forEach((element) => {
    element.addEventListener("click",async function () {
      let userId = element.className.split("-")[1];
      messagePanel.innerHTML = '';
      await fetch(`http://127.0.0.1:8000/message?${currentUser}?${userId}`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((message) => {
          for (let item of message){
            let temp = document.createElement('div');
            temp.className = 'message';
            if(item.senderID == currentUser){
              item.userName = "You"
              temp.style.backgroundColor = '#87f9f7';
            }
            let time = item.sendTime.substr(5,11).replace('T', ' ');
            temp.innerHTML = `
              <p class="meta">${item.userName}<span>${time}</span></p>
              <p class="text">
                ${item.messageInfo}
              </p>
            `
            
            messagePanel.appendChild(temp);
            console.log(temp);
          }
          console.log(message);
        });
    });
  });
});
