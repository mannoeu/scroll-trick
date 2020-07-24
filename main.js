const $ = document.querySelector.bind(document);

$("#items").addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    e.target.scrollBy({
      top: 0,
      left: 300,
      behavior: "smooth",
    });
  } else {
    e.target.scrollBy({
      top: 0,
      left: -300,
      behavior: "smooth",
    });
  }
});
