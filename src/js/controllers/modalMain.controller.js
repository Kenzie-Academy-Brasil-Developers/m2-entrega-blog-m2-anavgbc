import Posts from "./post.controller.js";

export default class Modal {
    static modalEdit = document.getElementsByClassName("modal__edit")[0]
    static modalLogout = document.getElementsByClassName("modal__logout")[0]

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
            this.modalEdit.classList.add("hidden")
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
        this.modalEdit.append(container)
    }

    static modal_Logout() {
        const containerLogout = document.createElement("div")
        const modalInner = document.createElement("div")
        const modal_div = document.createElement("div")


        const btnConfirm = document.createElement("button")
        const btnClose = document.createElement("button")

        const h3 = document.createElement("h3")

        containerLogout.classList.add("container")
        modalInner.classList.add("modal__inner--logout")
        btnClose.classList.add("logout__btnClose")
        btnConfirm.classList.add("logout__btnConfirm")
        modal_div.classList.add("logout__div")


        h3.innerText = "Tem certeza que deseja sair?"
        btnConfirm.innerText = "Confirmar"
        btnClose.innerText = "Fechar"

        btnClose.addEventListener("click", (event) => {
            event.preventDefault()
            this.modalLogout.classList.add("hidden")
        })

        btnConfirm.addEventListener("click", (event) => {
            event.preventDefault()
            localStorage.clear()
            window.location.href = "../views/login.html"
        })

        modalInner.append(h3, modal_div)
        modal_div.append(btnConfirm, btnClose)
        containerLogout.append(modalInner)
        this.modalLogout.append(containerLogout)
    }

}