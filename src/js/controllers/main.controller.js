import Posts from "./post.controller.js"
import UserRequest from "./user.controller.js"
import Modal from "./modalMain.controller.js"

export default class Elements {
    static idUser = JSON.parse(localStorage.getItem("@kenzie-blog:id"))
    static ul = document.getElementsByClassName("allPosts_list")[0]

    static async header() {
        const userInfo = document.getElementsByClassName("header__info")[0]
        const img = document.createElement("img")
        const user = document.createElement("h2")

        img.classList.add("header__info--img")
        user.classList.add("header__info--userName")

        const dataUser = await UserRequest.getUser(this.idUser)

        user.innerText = dataUser.username
        img.src = dataUser.avatarUrl
        userInfo.append(img, user)
    }

    static async posts() {
        const content = await Posts.getAllPosts()
        const allPosts = content.data

        allPosts.forEach((elem) => {
            const { avatarUrl, id, username } = elem.user
            const idPost = elem.id

            const li = document.createElement("li")
            const divInf = document.createElement("div")
            const img = document.createElement("img")
            const user = document.createElement("h3")
            const post = document.createElement("p")
            const editPost = document.createElement("input")
            const btnConfirm = document.createElement("button")
            const divEdit = document.createElement("div")
            const span = document.createElement("span")


            editPost.classList.add("hidden", "allPosts__each--editArea")
            btnConfirm.classList.add("hidden", "allPosts__each--btnConfirm")
            post.classList.add("allPosts__each--content")
            user.classList.add("allPosts__each--userName")
            img.classList.add("allPosts__each--img")
            li.classList.add("allPosts__each")
            divInf.classList.add("allPosts__each--div")
            divEdit.classList.add("allPosts__each--editPost")
            span.classList.add("allPosts__each--date")

            img.src = avatarUrl
            user.innerText = username
            post.innerText = elem.content
            editPost.type = "text"
            span.innerText = elem.createdAt.split("T")[0]

            if (id === this.idUser) {
                const btnEdit = document.createElement("button")
                const btnDelete = document.createElement("button")

                btnDelete.classList.add("editArea__btnDelete")
                btnEdit.classList.add("editArea__btnEdit")

                btnEdit.innerText = "Editar"
                btnDelete.innerText = "Apagar"

                btnEdit.addEventListener("click", (event) => {
                    event.preventDefault()
                    const divModal = document.getElementsByClassName("modal__edit")[0]
                    divModal.classList.remove("hidden")
    
                    Modal.modalEditPost(idPost)
                })

                btnDelete.addEventListener("click", async (event) => {
                    event.preventDefault()
                    await Posts.deletePost(idPost)
                    location.reload()
                })

                divEdit.append(btnEdit, btnDelete)
            }

            this.ul.append(li)
            li.append(img, divInf, divEdit)
            divEdit.append(span)
            divInf.append(user, post, editPost, btnConfirm)
        })
    }
}