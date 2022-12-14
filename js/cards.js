import Component from "./component.js";
import { delCard } from "./api/api.js";
export default class Card extends Component {
  constructor(cardArr) {
    const elements = {
      parent: document.querySelector(".card-wraper"),
      self: document.createElement("div"),
      textFullName: document.createElement("p"),
      textFullNameSpan: document.createElement("span"),
      textDoctor: document.createElement("p"),
      cardFool: document.createElement("div"),
      textSelect: document.createElement("select"),
      textPurposeOfVisi: document.createElement("p"),
      visit: document.createElement("p"),
      textShortDescription: document.createElement("p"),
      textAge: document.createElement("p"),
      textUrgency: document.createElement("p"),
      textUrgencySpan: document.createElement("span"),
      textPressure: document.createElement("p"),
      textHeartDisease: document.createElement("p"),
      textMassIndex: document.createElement("p"),
      textLastVisitData: document.createElement("p"),
      textStatus: document.createElement("p"),
      textStatusSpan: document.createElement("span"),
      textBtnShowMore: document.createElement("button"),
      btnClose: document.createElement("button"),
      btnEdit: document.createElement("button"),
      btnDel: document.createElement("button"),
    };
    super(elements);
    const {
      id,
      fullName,
      doctor,
      select,
      target,
      description,
      Urgency,
      age,
      pressure,
      bodyMassIndex,
      cardiovascularDiseases,
      lastVisitData,
      Status,
      dateVisit,
    } = cardArr;
    this.cardArr = cardArr;
    this.id = id;
    this.fullName = fullName;
    this.doctor = doctor;
    this.select = select;
    this.purposeOfVisi = target;
    this.shortDescription = description;
    this.urgency = Urgency;
    this.age = age;
    this.pressure = pressure;
    this.heartDisease = cardiovascularDiseases;
    this.massIndex = bodyMassIndex;
    this.lastVisitData = lastVisitData;
    this.status = Status;
    this.dateVisit = dateVisit;
  }

  async render() {
    let {
      self,
      cardFool,
      id,
      visit,
      textFullNameSpan,
      textFullName,
      textDoctor,
      textSelect,
      textPurposeOfVisi,
      textShortDescription,
      textUrgency,
      textUrgencySpan,
      textAge,
      textPressure,
      textMassIndex,
      textHeartDisease,
      textLastVisitData,
      textStatus,
      textStatusSpan,
      textBtnShowMore,
      btnClose,
      btnEdit,
      btnDel,
    } = this.elements;

    self.id = `${this.id}`;
    self.classList.add("card");
    self.classList.add("hide");
    textFullNameSpan.textContent = `${this.fullName}`;
    textFullNameSpan.setAttribute("data-name", "fullName");
    textFullName.textContent = "??.??.??: ";
    textFullName.append(textFullNameSpan);
    textDoctor.textContent = `??????????: ${this.doctor}`;
    textPurposeOfVisi.textContent = `???????? ????????????: ${this.purposeOfVisi}`;
    visit.textContent = `???????? ????????????: ${this.dateVisit}`;
    textUrgency.textContent = `????????????????????????: `;
    textUrgencySpan.textContent = `${this.urgency}`;
    textUrgencySpan.setAttribute("data-urgency", "urgency");
    textUrgency.append(textUrgencySpan);
    textShortDescription.textContent = `O?????? ????????????: ${this.shortDescription}`;
    textPressure.textContent = `?????????????????? ????????: ${this.pressure}`;
    textMassIndex.textContent = `???????????? ???????? ????????: ${this.massIndex}`;
    textHeartDisease.textContent = `?????????????????????? ???????????????????????? ????????????: ${this.heartDisease}`;
    textAge.textContent = `??????: ${this.age}`;
    textLastVisitData.textContent = `???????? ???????????????????? ????????????: ${this.lastVisitData}`;
    textSelect.add(new Option("Open", "Open", this.select));
    textSelect.add(new Option("Done", "Done"));
    textStatus.textContent = `????????????: `;
    textStatusSpan.textContent = `${this.status}`;
    textStatusSpan.setAttribute("data-status", "status");
    textStatus.append(textStatusSpan);
    btnClose.textContent = "????????????????";
    btnEdit.textContent = "????????????????????";
    btnClose.classList.add("header-container--button");
    btnEdit.classList.add("header-container--button");
    btnDel.classList.add("card-delete");
    cardFool.classList.add("hide");
    if (this.doctor === "Cardiologist") {
      await cardFool.append(
        textSelect,
        textStatus,
        textPurposeOfVisi,
        textUrgency,
        textShortDescription,
        textPressure,
        textMassIndex,
        textHeartDisease,
        textAge,
        btnClose,
        btnEdit
      );
    } else if (this.doctor === "Therapist") {
      await cardFool.append(
        textSelect,
        textStatus,
        textPurposeOfVisi,
        textUrgency,
        textShortDescription,
        textAge,
        btnClose,
        btnEdit
      );
    } else if (this.doctor === "Dentist") {
      await cardFool.append(
        textSelect,
        textStatus,
        textPurposeOfVisi,
        textUrgency,
        textShortDescription,
        textLastVisitData,
        btnClose,
        btnEdit
      );
    }
    cardFool.prepend(visit);
    await self.append(
      textFullName,
      textDoctor,
      cardFool,
      textBtnShowMore,
      btnDel
    );

    textSelect.addEventListener("change", async (e) => {
      textStatusSpan.textContent = textSelect.value;
      console.log(textSelect.value);
      if (textSelect.value === "Done") {
        self.classList.add("card-done");
        self.classList.remove("card-open");

        textStatusSpan.textContent = "done";
      } else if (textSelect.value === "Open") {
        self.classList.add("card-open");
        self.classList.remove("card-done");
        textStatusSpan.textContent = "open";
      }
    });
    textBtnShowMore.textContent = "???????????????? ????????????";
    textBtnShowMore.classList.add("header-container--button");
    await textBtnShowMore.addEventListener("click", () => {
      cardFool.classList.remove("hide");
      textBtnShowMore.classList.add("hide");
    });
    await btnClose.addEventListener("click", () => {
      cardFool.classList.add("hide");
      textBtnShowMore.classList.remove("hide");
    });
    await btnDel.addEventListener("click", () => {
      confirm("delit");
      if (confirm) {
        id = btnDel.parentNode.getAttribute("id");
        delCard(id);
      } else {
      }
    });
    await btnEdit.addEventListener("click", () => {
      alert("edit");
    });
    super.render();
  }
}
