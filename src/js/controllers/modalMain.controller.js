import Posts from "./post.controller.js";

export default class Modal {
    static modal = document.getElementsByClassName("modal__edit")[0]


    static modalEditPost(id) {
        const container = document.createElement("div")
        const modalInner = document.createElement("div")

        const btnSend = document.createElement("button")
        const btnClose = document.createElement("button")
        const imgClose = document.createElement("img")

        const textArea = document.createElement("textarea")
        textArea.placeholder = "Edite seu post aqui..."
        const data = {}

        container.classList.add("container")
        modalInner.classList.add("modal__inner")

        btnClose.classList.add("modal__btnClose")
        btnSend.classList.add("modal__btnSend")
        imgClose.classList.add("btnCloseImg")
        textArea.classList.add("modal__textArea")

        imgClose.src = "../../assets/close.svg"
        btnSend.innerText = "Continue"

        btnClose.addEventListener("click", (event) => {
            event.preventDefault()
            this.modal.classList.add("hidden")
        })

        btnSend.addEventListener("click", async (event) => {
            event.preventDefault()
            data.content = textArea.value
            await Posts.editPost(id, data)
            location.reload()
        })

        modalInner.append(btnClose, textArea, btnSend)
        btnClose.append(imgClose)
        container.append(modalInner)
        this.modal.append(container)
    }
}