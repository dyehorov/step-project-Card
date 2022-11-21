import { getDateTimeString } from "./validateModal.js"
class Visit {
  rendeInputFields() {
    const html = `<label for="fullName" class="form-label" name="fullName">ПІБ пацієнта</label>
        <input required type="text" name="fullName" id="fullName"/>
        <label for="target" class="form-label">Мета візиту:</label>
        <input required type="text" name="target" id="target"/>
        <label for="description" class="form-label">Короткий опис візиту:</label>
        <input type="text" name="description" id="description"/>
        <label for="urgency" class="form-label">Терміновість візиту:</label>
        <select required name="urgency" class="visit-form-select form-select">
            <option value="High">High</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
        </select>
        <label for="dateVisit" class="form-label">Дата візиту:</label>
       <input required type="date" name="dateVisit" id="dateVisit" class="visit-form-date" min="${getDateTimeString()}" title="Choose date of visit"/>`
    return html
  }

  renderFields() {
    const html = `<form id="visit-form" class="visit-form">
        ${this.rendeInputFields()}
        </form>`
    return html
  }

  getValue() {
    this.form = document.querySelector("#visit-form")
    const inputs = this.form.querySelectorAll("input")
    this.options = {}
    const urgencyValue = this.form.querySelector(".visit-form-select").value
     
    inputs.forEach((input) => {     
      if (!input.hasAttribute("required")) {
        if (input.value === "") {
          return
        }
      }
      input.value === "" ? (input.style.borderColor = "red") : (input.style.borderColor = "#006196")
      const key = this.form.querySelector(`label[for= "${input.name}"]`)     
      this.options[input.name] = input.value          
    })

    this.options["Urgency"] = urgencyValue
    return this.options
  }  

  changeOptionsKey(obj, oldKey, newKey) {
    if (obj[oldKey]) {
      Object.defineProperty(obj, newKey, Object.getOwnPropertyDescriptor(obj, oldKey))
      delete obj[oldKey]
    }
  }
}

export default Visit
