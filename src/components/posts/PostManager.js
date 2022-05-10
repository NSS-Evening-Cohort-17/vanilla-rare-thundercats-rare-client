const remoteURL = 'http://127.0.0.1:8088'

export const addPost = (newPost) => {
    return fetch(`${remoteURL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    }).then(res => res.json())
}