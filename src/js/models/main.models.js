import Posts from "../controllers/post.controller.js"
import Modal from "../controllers/modalMain.controller.js"

export default class BtnPost {

    static logout() {
        const btnLogout = document.getElementById("header__logout")
        const modalLogout = document.getElementsByClassName("modal__logout")[0]
        btnLogout.addEventListener("click", (event) => {
            event.preventDefault()
            modalLogout.classList.remove("hidden")
            Modal.modal_Logout()
        })
    }

    static editContent() {
        const textArea = document.querySelector("textarea")
        const btnPost = document.getElementById("postArea__btnPost")
        const dataPost = {}

        btnPost.addEventListener("click", async (event) => {
            event.preventDefault()
            dataPost.content = textArea.value
            await Posts.writePost(dataPost)
            location.reload()
        })
    }
}























// {id: 551, content: 'Como sera que pego o ID do post :)', createdAt: '2022-07-07T00:00:00.000Z', updatedAt: null, user: {…}}
// content: "Como sera que pego o ID do post :)"
// createdAt: "2022-07-07T00:00:00.000Z"
// id: 551
// updatedAt: null
// user:
// avatarUrl: "https://i.pinimg.com/236x/2b/52/a2/2b52a2e94746bb2e2aed44b4e000fcf5--american-pitbull-dog-american-bullies.jpg"
// id: 2056
// username: "seuJoao"

// {id: 638, content: 'sou um pato', createdAt: '2022-07-07T00:00:00.000Z', updatedAt: null, user: {…}}
// content: "sou um pato"
// createdAt: "2022-07-07T00:00:00.000Z"
// id: 638
// updatedAt: null
// user:
// avatarUrl: "https://pbs.twimg.com/media/EeTpvT8WAAA3VBs.jpg"
// id: 2643
// username: "Frederico"