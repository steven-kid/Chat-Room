signupBtn = document.getElementById("signupBtnkey");
signupAccount = document.getElementById("signupUsername");
signupPwd = document.getElementById("signupPwd");
signupMessage = document.getElementById("signupMessage");

signupBtn.addEventListener('click', () => {
  const user = {username: signupAccount.value , password: signupPwd.value};
  fetch(
    `http://127.0.0.1:8000/register?${user.username}?${user.password}`,
    {
      method: "POST",
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.status);
      if(data.status === 'duplicate'){
        signupMessage.textContent = "Username already exist";
        signupMessage.style.display = "block";
      } else {
        window.location.href = "http://127.0.0.1:5500/frontend/index.html#";
      }
    });
});
