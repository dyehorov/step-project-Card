

export default class Component {
  constructor(DOMElements, classes) {
    this.elements = DOMElements;
    this.classes = classes;
  }

  render() {
    const { self, parent } = this.elements;

    parent.prepend(self);
  }
  createElement(elName, classNames = [], text) {
    const element = document.createElement(elName);
    if (text) {
      element.textContent = text;
    }
    element.classList.add(...classNames);
    return element;
  }

  appendAttribute(el, name, value) {
    el.setAttribute(name, value);
    return el;
  }
}

