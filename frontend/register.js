signupBtn = document.getElementById("signupBtnkey");
signupPwd = document.getElementById("signupPwd");
signupMessage = document.getElementById("signupMessage");

console.log(signupBtn);



signupBtn.onclick = () => {
  const user = { name: "John", username: "Smith" };
  const response = fetch(
    `http://127.0.0.1:8000/register?${user.name}?${user.username}`,
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      // body: JSON.stringify(user),
    }
  );
};
