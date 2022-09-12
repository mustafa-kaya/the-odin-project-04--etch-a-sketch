function createDiv(withClass) {
  const div = document.createElement("div");
  div.classList.add(withClass);
  return div;
}

export { createDiv };
