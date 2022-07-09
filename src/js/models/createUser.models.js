import UserRequest from "../controllers/user.controller.js"

export default class UserModel{
static form = document.getElementsByClassName("user__form")[0]
static button = document.getElementById("user__button")

static inputValues(){
     const formSpread = [...this.form]
     const data = {}

    this.button.addEventListener("click", async (event) => {
        event.preventDefault()
        formSpread.forEach((input) => {
            data[input.name] = input.value
        })
        console.log(data)

        const obj = Object.keys(await UserRequest.createUser(data))
       
        if (obj.length > 1) {
            window.location.href = "../views/login.html"
        }else{
            console.log("deu erro! ja existe algo, ou a senha ta errada")
        }
        // {id: 2866, email: 'Fredericasao@kenzie.com', username: 'aaaasasasasa', avatarUrl: 'asdasda'}
    })
}



}








// export default function User() {
//     const form = document.getElementsByClassName("user__form")[0]
//     const button = document.getElementById("user__button")
//     const data = {}


//     button.addEventListener("click", async (event) => {
//         event.preventDefault()
//         formSpread.forEach((input) => {
//             data[input.name] = input.value
//         })
//         console.log(data)

//         const obj = Object.keys(await UserRequest.createUser(data))
       
//         if (obj.length > 1) {
//             window.location.href = "../../../login.html"
//         }else{
//             console.log("deu erro! ja existe algo, ou a senha ta errada")
//         }
//         // {id: 2866, email: 'Fredericasao@kenzie.com', username: 'aaaasasasasa', avatarUrl: 'asdasda'}
//     })
// }

// export default function User() {
//     const form = document.getElementsByClassName("user__form")[0]
//     const button = document.getElementById("user__button")
//     const data = {}

//     const formSpread = [...form]

//     button.addEventListener("click", async (event) => {
//         event.preventDefault()
//         formSpread.forEach((input) => {
//             data[input.name] = input.value
//         })
//         console.log(data)

//         const obj = Object.keys(await UserRequest.createUser(data))
       
//         if (obj.length > 1) {
//             window.location.href = "../../../login.html"
//         }else{
//             console.log("deu erro! ja existe algo, ou a senha ta errada")
//         }
//         // {id: 2866, email: 'Fredericasao@kenzie.com', username: 'aaaasasasasa', avatarUrl: 'asdasda'}
//     })
// }
