const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logoutBtn = document.querySelector("#logout-btn");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit() {
  event.preventDefault(); // prevent browser to refresh

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // f'Hello {username}'
  greeting.innerText = `Hello ${username}`;

  loginForm.classList.add(HIDDEN_CLASSNAME);

  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

function onLogout() {
  loginInput.value = "";

  greeting.classList.add(HIDDEN_CLASSNAME);
  logoutBtn.classList.add(HIDDEN_CLASSNAME);

  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
logoutBtn.addEventListener("click", onLogout);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
} else {
  // show the greetings
}

localStorage.removeItem(USERNAME_KEY);
console.log(savedUsername);

// handleLinkClick({}) <- when the function is called, it always contains at least one argument.
