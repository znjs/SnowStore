const scrollDownBtn = document.querySelector(".scroll-down");

scrollDownBtn.addEventListener("click", () => {
  console.log("clicked");
  window.scroll({
    top: 900,
    left: 0,
    behavior: "smooth",
  });
});
