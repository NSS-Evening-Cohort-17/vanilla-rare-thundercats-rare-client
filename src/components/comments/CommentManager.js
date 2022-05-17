const remoteURL = "http://localhost:8088"

export const getComments = () => {
    return fetch(`${remoteURL}/comments`)
    .then(res => res.json())
}

export const getCommentsById = (id) => {
    return fetch(`${remoteURL}/comments/${id}`)
    .then(res => res.json())
}

export const addComment = (newComment) => {
    return fetch(`${remoteURL}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newComment)
    }).then(response => response.json())
}

export const deleteComment = (id) => {
    return fetch(`${remoteURL}/comments/${id}`, {
        method: "DELETE"
    }).then(response => response.json())
}

