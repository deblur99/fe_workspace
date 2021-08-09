const h1 = document.querySelector(".title h1:first-child");

h1.style.color = "black";

console.dir(h1);

function handleTitleClick() {
  if (h1.style.color === "black") {
    h1.style.color = "lightseagreen";
  } else {
    h1.style.color = "black";
  }
}

function handleMouseEntered() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeaved() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("Copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("Looks good");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEntered);
h1.addEventListener("mouseleave", handleMouseLeaved);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

/*
h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEntered;
h1.addEventListener("mouseleave", handleMouseLeaved);
*/
