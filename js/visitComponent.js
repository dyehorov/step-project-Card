import Visit from "./visit.js"
import { getDateTimeString, checkVisitValue } from "./validateModal.js"

class VisitDentist extends Visit {
  constructor() {
    super()
  }
  renderFields() {
    const html = `<form id="visit-form" class="visit-form">
        ${super.rendeInputFields()}
        ${this.renderAdditionalFields()}
        </form>`
    return html
  }
  renderAdditionalFields() {
    const html = `<label for="lastVisitData" class="form-label">Дата останнього відвідування:</label>
           <input required type="date" name="lastVisitData" id="last-visit" class="visit-form-date" max="${getDateTimeString()}"/>`
    return html
  }
}
class VisitCardiologist extends Visit {
  constructor() {
    super()
  }
  renderFields() {
    const html = `<form id="visit-form" class="visit-form">
        ${super.rendeInputFields()}
        ${this.renderAdditionalFields()}
        </form>`
    return html
  }
  renderAdditionalFields() {
    const html = `<label for="pressure" class="form-label">Звичайний тиск:</label>
        <input required type="text" name="pressure" id="pressure" min="60" max="150" placeholder="від 60 до 150"/>
        <label for="bodyMassIndex" class="form-label">Індекс маси тіла:</label>
        <input required type="number" name="bodyMassIndex" id="bodyMassIndex" min="16" max="40"  placeholder="від 16 до 40"/>
        <label for="cardiovascularDiseases" class="form-label">Перенесені захворювання серцево-судинної системи:</label>
        <input required type="text" name="cardiovascularDiseases" id="cardiovascularDiseases"/>
        <label for="age" class="form-label">Вік:</label> 
        <input required type="number" name="age" id="age" min="1" max="130" placeholder="від 1"/>`
    return html
  }
  getValue() {
    super.getValue()
    const form = document.querySelector("#visit-form")
    this.options["Normal pressure"] = checkVisitValue(form.elements.pressure, 50, 160)
    this.options["Body mass index"] = checkVisitValue(form.elements["bodyMassIndex"], 16, 40)    
    return this.options
  }
}
class VisitTherapist extends Visit {
  constructor() {
    super()
  }
  renderFields() {
    const html = `<form id="visit-form" class="visit-form">
        ${super.rendeInputFields()}
        ${this.renderAdditionalFields()}
        </form>`
    return html
  }
  renderAdditionalFields() {
    const html = `<label for="age" class="form-label">Вік:</label> 
       <input required type="number" name="age" id="age" min="1" max="130"  placeholder="від 1"/>`
    return html
  }

  getValue() {
    super.getValue()
    const form = document.querySelector("#visit-form")    
    return this.options
  }
}

export { VisitDentist, VisitCardiologist, VisitTherapist }
