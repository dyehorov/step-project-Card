export default class Component {
  constructor(DOMElements, classes) {
    this.elements = DOMElements;
    this.classes = classes;
  }

  render() {
    const { self, parent } = this.elements;

    parent.prepend(self);
  }
}
function noItemHaveBeenAdded() {
  const cardContainer = document.querySelector(".card-wraper");
  const startText = document.querySelector(".startText");
  if (cardContainer.childElementCount > 0) {
    startText.style.visibility = "hidden";
  } else if (cardContainer.childElementCount === 0) {
    startText.style.visibility = "visible";
  }
}

export { noItemHaveBeenAdded };



