export default class Posts {
    static token = JSON.parse(localStorage.getItem("@kenzie-blog:token"))
    static headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
    }

    static async getAllPosts() {
        const url = "https://blog-m2.herokuapp.com/posts?page=1"
        const response = await fetch(url, {
            method: "GET",
            headers: this.headers
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => err)
        return response
    }

    static async writePost(dataPost) {
        const response = await fetch("https://blog-m2.herokuapp.com/posts", {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(dataPost)
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => err)

        return response
    }

    static async deletePost(idPost) {
        return await fetch(`https://blog-m2.herokuapp.com/posts/${idPost}`, {
            method: "DELETE",
            headers: this.headers
        })
            .then(res => res.json())
            .catch(err => err)
    }

    static async editPost(idEdit, dataPost) {
        const response = await fetch(`https://blog-m2.herokuapp.com/posts/${idEdit}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(dataPost)
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => err)

        return response

    }
}