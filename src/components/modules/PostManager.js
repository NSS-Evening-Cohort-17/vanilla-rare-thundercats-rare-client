const remoteURL = "http://localhost:8088"

export const getAllPosts = () => {
    return fetch (`${remoteURL}/posts`)
    .then(res => res.json())
}

export const getPostById = (id) => {
    return fetch (`${remoteURL}/posts/${id}`)
    .then(res => res.json())
}

export const getPostsByUserId = (userId) => {
    return fetch (`${remoteURL}/posts?user=${userId}`)
    .then(res => res.json())
}

export const deletePost = (id) => {
    return fetch(`${remoteURL}/posts/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}