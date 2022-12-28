loginBtn = document.getElementById("loginBtnkey");
loginAccount = document.getElementById("loginUsername");
loginPwd = document.getElementById("loginPwd");
loginMessage = document.getElementById("loginMessage");

loginBtn.addEventListener('click', () => {
  fetch('http://127.0.0.1:8000/login')
    .then((response) => response.json())
    .then((data) => {
      let has = false;
      let account = loginAccount.value;
      let pwd = loginPwd.value;
      data.forEach((element) => {
        if (element.userName === account) {
          has = true;
          if (element.password !== pwd) {
            loginMessage.textContent = "Wrong password";
            loginMessage.style.display = "block";
          } else {
            console.log(element.userID)
            console.log(element)
            window.location.href = "http://127.0.0.1:5500/frontend/chat.html?user=" + `${element.userID}`;
          }
        }
      });
      if (!has) {
        loginMessage.textContent = "Username not exist";
        loginMessage.style.display = "block";
      }
    });
});
