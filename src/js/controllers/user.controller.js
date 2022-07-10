export default class UserRequest {
    
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
        return response
    }

    static async getUser(id) {
        const response = await fetch(`https://blog-m2.herokuapp.com/users/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem("@kenzie-blog:token"))}`
            },
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => err)

        return response
    }
}