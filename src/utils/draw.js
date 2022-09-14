function draw(color) {
  const cells = document.querySelectorAll(".canvas .cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", (event) => {
      event.target.style.backgroundColor = color;
    });
  });
}

export { draw };
