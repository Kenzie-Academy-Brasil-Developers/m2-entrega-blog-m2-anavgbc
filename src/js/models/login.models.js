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

            console.log(dataLogin)
            await LoginRequest.login(dataLogin)
            console.log(dataLogin)

            if (JSON.parse(localStorage.getItem("@kenzie-blog:token")) !== "null") {
                window.location.href = "../views/main.html"
                
            } else {
                console.log("opa deu errroooo!!")
            }//else SAIR UM MODAL DIZENDO QUE NAO EXISTE USUARIOOOOOOOOOOO
        })
    }





}










// function loginData() {
//     const form = document.getElementsByClassName("login__form")[0]
//     const button = document.getElementById("login__button")


//     button.addEventListener("click", async (event) => {
//         event.preventDefault()

//         const formSpread = [...form]
//         formSpread.forEach((input) => {
//             dataLogin[input.name] = input.value
//         })
//         await LoginRequest.login(dataLogin)
//         console.log(dataLogin)

//         if (JSON.parse(localStorage.getItem("@kenzie-blog:token")) !== "null") {
//             window.location.href = "../../../main.html"
//         }//else SAIR UM MODAL DIZENDO QUE NAO EXISTE USUARIOOOOOOOOOOO
//     })
// }
// loginData()
