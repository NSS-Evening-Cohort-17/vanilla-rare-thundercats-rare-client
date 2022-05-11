const remoteURL="http://localhost:8088"

export const getAllTags = () => {
    return fetch(`${remoteURL}/tags`)
    .then(res => res.json())
}