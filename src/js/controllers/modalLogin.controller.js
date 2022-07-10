export default class Modal__Login {

    static modal_error = document.getElementsByClassName("modal__errorLogin")[0]

    static errorModal() {
        const containerError = document.createElement("div")
        const modalInner = document.createElement("div")

        const btnClose = document.createElement("button")
        const imgBtn = document.createElement("img")

        const h3 = document.createElement("h3")

        h3.innerText = "Ops! Algo deu errado, tente novamente!"
        imgBtn.src = "../../assets/close.svg"


        containerError.classList.add("container")
        modalInner.classList.add("modal__inner--error")
        btnClose.classList.add("error__btnClose")

        btnClose.addEventListener("click", (event) => {
            event.preventDefault()
            this.modal_error.classList.add("hidden")
        })

        modalInner.append(btnClose, h3)
        btnClose.append(imgBtn)
        containerError.append(modalInner)
        this.modal_error.append(containerError)
    }
}