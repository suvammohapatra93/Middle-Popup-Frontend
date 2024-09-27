document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const openButton = document.querySelector(".btn");
  const closeButton = popup.querySelector("button");

  openButton.addEventListener("click", () => {
    popup.classList.add("open-popup");
  });

  closeButton.addEventListener("click", () => {
    popup.classList.remove("open-popup");
  });
});
