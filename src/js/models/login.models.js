import LoginRequest from "../controllers/login.controller.js"

export default class LoginData {
    static form = document.getElementsByClassName("login__form")[0]
    static button = document.getElementById("login__button")

    static loginValues() {
        const dataLogin = {}
        const formSpread = [...this.form]

        this.button.addEventListener("click", async (event) => {
            event.preventDefault()

            formSpread.forEach((input) => {
                dataLogin[input.name] = input.value
            })
            const obj = Object.keys(await LoginRequest.login(dataLogin))
            console.log(obj)

            if (obj.length > 1) {
                window.location.href = "../views/main.html"
            } else {
                const modal = document.getElementsByClassName("modal__errorLogin")[0]
                modal.classList.remove("hidden")
            }
        })
    }
}
