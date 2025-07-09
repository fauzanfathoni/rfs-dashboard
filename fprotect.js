document.addEventListener("DOMContentLoaded", function () {
  const splashText = document.createElement("p");
  splashText.className = "Powered";
  splashText.style.fontSize = "0.6em";
  splashText.style.fontStyle = "italic";
  splashText.style.opacity = "0.7";
  splashText.textContent = "Powered by Fauzan";

  const splashTarget = document.querySelector(".splash-content");
  if (splashTarget) splashTarget.appendChild(splashText);

  const footer = document.createElement("div");
  footer.className = "footer-credit";
  footer.innerHTML = 'Powered by <a href="https://instagram.com/fznfthni__" target="_blank">Fauzan</a>';
  footer.style.position = "fixed";
  footer.style.bottom = "10px";
  footer.style.right = "15px";
  footer.style.fontSize = "0.75em";
  footer.style.fontStyle = "italic";
  footer.style.color = "#777";
  footer.style.zIndex = "10";

  document.body.appendChild(footer);
});
