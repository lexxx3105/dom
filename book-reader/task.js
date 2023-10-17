const textBlock = document.querySelector(`.book`);

(function() {
  fontButtons = Array.from(textBlock.querySelectorAll(`.font-size`));
  fontButtons.forEach(button => {
    button.onclick = fontSize;
  })
}())

function fontSize() {
  let currentPosition = position(fontButtons, `font-size_active`);
  fontButtons[currentPosition].classList.remove(`font-size_active`);
  this.classList.add(`font-size_active`);
  currentPosition = position(fontButtons, `font-size_active`);
  editText(currentPosition);
  return false;
}

function position(nodeCollection, nameClass) {
  return nodeCollection.findIndex(item => item.className.includes(nameClass));
}

function editText(position) {
  if (position === 0) {
    textBlock.className = `book book_fs-small`;
  } else if (position === 2) {
    textBlock.className = `book book_fs-big`;
  } else {
    textBlock.className = `book`;
  }
}