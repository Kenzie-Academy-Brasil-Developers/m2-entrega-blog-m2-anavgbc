export default class LoginRequest {
    
    static async login(dataLogin) {
        const url = "https://blog-m2.herokuapp.com/users/login"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataLogin)
        })
            .then(res => res.json())
            .then((res) => {
                localStorage.setItem("@kenzie-blog:token", JSON.stringify(res.token))
                localStorage.setItem("@kenzie-blog:id", JSON.stringify(res.userId))

                return res
            })
            .catch(err => err)

            return response
    }
}








