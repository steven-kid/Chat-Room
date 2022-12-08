let login = document.querySelector(".login");
let signup = document.querySelector(".signup");

let loginbtn = document.querySelector(".loginbtn");
let signupbtn = document.querySelector(".signupbtn");

let user = document.querySelector(".head");

signupbtn.addEventListener("click", () => {
    login.style.transform = "rotateY(180deg)"
    signup.style.transform = "rotateY(0deg)";
    user.innerHTML = "create account"
})

loginbtn.addEventListener("click", () => {
    login.style.transform = "rotateY(0deg)"
    signup.style.transform = "rotateY(-180deg)";
    user.innerHTML = "account login"
})