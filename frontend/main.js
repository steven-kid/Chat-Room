const url = window.location.href;
const currentUser = parseInt(url.split("=")[1]);
const userList = document.querySelector("#users");
const messagePanel = document.querySelector(".chat-messages");
const sendBtn = document.querySelector('.send');
const msg = document.querySelector('#msg');

let chatTarget;
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
        temp.addEventListener("click", function () {
          let tarName = temp.className.split("-")[0];
          let userId = temp.className.split("-")[1];
          chatTarget = userId;
          messagePanel.innerHTML = `<div class="friend-label">${tarName}</div>`;
          fetch(`http://127.0.0.1:8000/message?${currentUser}?${userId}`, {
            method: "POST",
          })
            .then((res) => res.json())
            .then((message) => {
              for (let item of message){
                let msgLabel = document.createElement('div');
                msgLabel.className = 'message';
                if(item.senderID == currentUser){
                  item.userName = "You"
                  msgLabel.style.backgroundColor = '#87f9f7';
                }
                let time = item.sendTime.substr(5,11).replace('T', ' ');
                item.messageInfo = item.messageInfo.replaceAll("%20", " ")
                msgLabel.innerHTML = `
                  <p class="meta">${item.userName}<span>${time}</span></p>
                  <p class="text">
                    ${item.messageInfo}
                  </p>
                `
                messagePanel.appendChild(msgLabel);
              }
            });
        });
        btns.push(temp);
        userList.appendChild(temp);
      }
    });
  return btns;
}

{
  /* <div class="message">
  <div class="friend-label">Tom</div>
      <p class="meta">Brad <span>9:12pm</span></p>
      <p class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        repudiandae.
      </p>
    </div> */
}

getData();

sendBtn.addEventListener('click', () => {
  console.log(msg.value);
  fetch(`http://127.0.0.1:8000/msg?${currentUser}?${chatTarget}?${msg.value}`, {
    method: "POST",
  }).then((res) => res.json())
  let temp = document.createElement('div');
  temp.className = 'message';
  let tempName = "You"
  temp.style.backgroundColor = '#87f9f7';
  // item.messageInfo = item.messageInfo.replaceAll("%20", " ")
  let d = new Date();
  time = `${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
  temp.innerHTML = `
    <p class="meta">${tempName}<span>${time}</span></p>
    <p class="text">
      ${msg.value}
    </p>
  `
  msg.value='';
  messagePanel.appendChild(temp);
})

