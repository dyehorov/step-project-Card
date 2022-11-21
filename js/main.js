import Component from "./component.js";
import createHeader from "./header.js";
import { noItemHaveBeenAdded } from "./element.js";
import {
  filterByInput,
  filterByStatus,
  filterByUrgency,
  clear,
} from "./filterFunctions.js";
import filterForm from "./filter.js";
export default class Main extends Component {
  constructor(classes) {
    const elements = {
      parent: document.querySelector("header"),
      self: document.createElement("main"),
      startText: document.createElement("p"),
      container: document.createElement("div"),
    };

    super(elements);
  }

  render() {
    const { parent, self, startText, container } = this.elements;
    container.classList.add("card-wraper");
    startText.classList.add("startText");
    startText.textContent = "No items have been added";

    self.append(startText, filterForm, container);
    super.render();
    parent.after(self);
  }
}

new Main().render();
noItemHaveBeenAdded();

const searchUrgency = document.getElementById("filter-urgency");
searchUrgency.addEventListener("change", filterByUrgency);
const searchStatus = document.getElementById("filter-status");
searchStatus.addEventListener("change", filterByStatus);
const clearBtn = document.querySelector(".filter-btn");
clearBtn.addEventListener("click", clear);
filterByInput();


