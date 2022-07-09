export default class UserRequest {
    static token = JSON.parse(localStorage.getItem("@kenzie-blog:token"))

    static async createUser(data) {
        const response = await fetch("https://blog-m2.herokuapp.com/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => err)
        console.log(response)
        return response
    }

    static async getUser(id) {
        const response = await fetch(`https://blog-m2.herokuapp.com/users/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => err)

        console.log(response)
        return response
    }
}










// {
//     "username": "teste",
//     "email": "teste@kenzie.com.br",
//     "avatarUrl": "https://github.com/phmc99.png",
//     "password": "Teste123"
//   }



/* {username: 'Ana', email: 'ana@kenzie.com', avatarUrl: 'ana.jpg', password: '123456'}
avatarUrl: "ana.jpg"
email: "ana@kenzie.com"
password: "123456"
username: "Ana" */

// image.png