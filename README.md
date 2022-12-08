### Chatroom 🤺

#### Technology stack
front-end 
- vanilla 
- html 
- css (font-awesome icon library)
- javascript
- ajax (fetching json data from the backend)

#### back-end
- node.js
- express.js(api)
- mysql library(connecting to local mysql server)

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