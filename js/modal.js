import Component from "./component.js"

export default class Modal extends Component {
    constructor(titleText) {
        super()

        this.modalTitle = titleText

        this.modalBlock = this.createElement("div", ["modal", "d-block"], "") //  <div class="modal d-block" tabindex="-1" role="dialog">        
        this.modalBlock.prepend((this.modalDialog = this.createElement("div", ["dialog-wrapper"]))) //<div class=""> !
        this.modalBackdrop = this.createElement("div", ["modal-backdrop", "show"]) //<div class="modal-backdrop fade show"></div>
        this.modalDialog.insertAdjacentHTML("beforeend", this.createModalContent())
    }

    createModalContent() {
        this.content = `
		 <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${this.modalTitle}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span class="close-span" aria-hidden="true">&times;</span>
            </button>
                </div>
                <div class="modal-body">
                 ${this.renderModalBody()} 
                </div>
                <div class="modal-footer">
                    ${this.renderBtn()}
                </div>
            </div>
		 `
        return this.content
    }

    show() {
        document.querySelector("main").after(this.modalBlock)
        document.body.append(this.modalBackdrop)
            // hide modal when clicK X or out of modal
        this.modalBlock.addEventListener("click", (ev) => {
            if (ev.target.matches(".close") || ev.target.matches(".close-span") || ev.target === this.modalBlock)
                this.hide(ev)
        })
    }

    hide() {
            this.modalBlock.remove()
            this.modalBackdrop.remove()
        }
        
}
