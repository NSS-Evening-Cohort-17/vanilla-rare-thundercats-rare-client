const remoteURL = "http://localhost:8088"

export const getComments = () => {
    return fetch(`${remoteURL}/comments`)
    .then(res => res.json())
}