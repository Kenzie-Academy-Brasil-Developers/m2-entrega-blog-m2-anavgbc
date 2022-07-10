import UserRequest from "../controllers/user.controller.js"

export default class UserModel {
    static form = document.getElementsByClassName("user__form")[0]
    static button = document.getElementById("user__button")
    static modal = document.getElementsByClassName("modal__user")[0]

    static inputValues() {
        const formSpread = [...this.form]
        const data = {}

        this.button.addEventListener("click", async (event) => {
            event.preventDefault()
            formSpread.forEach((input) => {
                data[input.name] = input.value
            })

            const obj = Object.keys(await UserRequest.createUser(data))
            
            if (obj.length > 1) {
                window.location.href = "./src/js/views/login.html"
            } else {
                this.modal.classList.remove("hidden")
            }
        })
    }
}
