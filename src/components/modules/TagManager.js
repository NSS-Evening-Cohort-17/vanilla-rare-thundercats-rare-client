const remoteURL="http://localhost:8088"

export const getAllTags = () => {
    return fetch(`${remoteURL}/tags`)
    .then(res => res.json())
}

export const getTagById = (id) => {
    return fetch(`http://localhost:8088/tags/${id}`)
    .then(res => res.json())
}

export const addTag = tag => {
    return fetch("http://localhost:8088/tags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
        .then(getAllTags)
}

export const updateTag = tag => {
    return fetch(`http://localhost:8088/tags/${tag.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
        .then(getAllTags)
}