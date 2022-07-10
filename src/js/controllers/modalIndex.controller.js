export default class Modal_Index {
    static modal = document.getElementsByClassName("modal")[0]

    static createUserError() {
        const containerErrorUser = document.createElement("div")
        const modalInner = document.createElement("div")

        const btnClose = document.createElement("button")
        const imgBtn = document.createElement("img")

        const h3 = document.createElement("h3")

        h3.innerText = "Ops! Algo deu errado, tente novamente!"
        imgBtn.src = "./src/assets/close.svg"

        containerErrorUser.classList.add("container")
        modalInner.classList.add("modal__inner--error")
        btnClose.classList.add("error__btnClose")

        btnClose.addEventListener("click", (event) => {
            event.preventDefault()
            this.modal.classList.add("hidden")
        })

        modalInner.append(btnClose, h3)
        btnClose.append(imgBtn)
        containerErrorUser.append(modalInner)
        this.modal.append(containerErrorUser)
    }
}