### Chatroom 🤺

#### Technology stack
front-end  
- html 
- css (font-awesome icon library)
- javascript
- fetch api (fetching json data from the backend)

#### back-end
- node.js
- express.js(api)
- mysql library(connecting to local mysql server)

#### features
add friend name label ✅
add friends 
edit profile
group chat part
button click effect
send message logic ✅

### to be done
fresh page(data can not refresh)

#### Bugs
In two different js file, after import into index.html
a strange bug occur (problem while the card's transition)
which caused by naming two element the same name
In index.js
```js
let loginbtn = document.querySelector(".loginbtn");
```
In register.js
```js
let loginbtn = document.querySelector(".signupbtn");
```