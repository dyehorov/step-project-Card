import Modal from "./modal.js";
import {
  VisitDentist,
  VisitCardiologist,
  VisitTherapist,
} from "./visitComponent.js";
import { addVisit } from "./api/api.js";
import Card from "./cards.js";
export default class VisitModal extends Modal {
  constructor(title) {
    super(title);
    this.visit = null;
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onCreateBtnClick = this.onCreateBtnClick.bind(this);
  }
  renderModalBody() {
    this.modalBlock.classList.add("visit-form");
    const content = `    
      <select class="form-select form-select-lg col-sm-12 visit-select">
        <option selected>Обрати лікаря</option>
        <option value="Dentist">Стоматолог</option>
        <option value="Cardiologist">Кардіолог</option>
        <option value="Therapist">Терапевт</option>
      </select>`;

    return content;
  }
  renderBtn() {
    const buttonHTML = `
     		<button id="card-create-btn" type="submit" class="btn btn-primary btn-sm d-none"></button>`; // d-none dont show at ch. doctos form
    return buttonHTML;
  }

  show() {
    super.show();
    this.addListeners();
  }

  hide() {
    super.hide();
    this.removeListeners();
  }

  addListeners() {
    this.selector = document.querySelector(".visit-select");
    this.selector.addEventListener("change", this.onSelectChange);

    this.btn = document.querySelector("#card-create-btn");
    this.btn.addEventListener("click", this.onCreateBtnClick);
  }

  removeListeners() {
    this.selector.removeEventListener("change", this.onSelectChange);
  }

  onSelectChange() {
    this.removeVisitForm();
    this.selectVisitForm(this.selector.value);
    this.addVisitForm();
    this.modalBlock.classList.add("visit-form--selected");
  }

  addVisitForm(value = "Створити") {
    document.querySelector(".dialog-wrapper").style.width = "280px";
    this.selector.insertAdjacentHTML("afterend", this.visit.renderFields());
    this.form = document.querySelector("#visit-form");
    this.btn.classList.remove("d-none");
    this.btn.textContent = value;
  }

  removeVisitForm() {
    if (this.form) {
      this.form.remove();
    }
  }
  async onCreateBtnClick(e) {
    e.preventDefault();
    this.options = this.visit.getValue();
    this.options["Status"] = "open";
    if (Object.values(this.options).some((el) => el === "")) return;

    if (this.btn.textContent === "Створити") {
      this.options["doctor"] = this.selector.value;      
      const result = await addVisit(this.options);
      new Card(this.options).render();      
    }   
    
    this.btn.removeEventListener("click", this.onCreateBtnClick);
    this.hide();
  }

  selectVisitForm(value) {
    switch (value) {
      case "Dentist":
        this.visit = new VisitDentist();
        break;

      case "Cardiologist":
        this.visit = new VisitCardiologist();
        break;

      case "Therapist":
        this.visit = new VisitTherapist();
        break;

      default:
        break;
    }
  }
}

