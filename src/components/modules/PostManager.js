const remoteURL = "http://localhost:8088"

export const getAllPosts = () => {
    return fetch (`${remoteURL}/posts`)
    .then(res => res.json())
}