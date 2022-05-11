const remoteURL = "http://localhost:8088"

export const getAllCategories = () => {
  return fetch(`${remoteURL}/categories`)
  .then(res => res.json())
}

export const getCategoryById = (id) => {
  return fetch(`${remoteURL}/categories/${id}`)
  .then(res => res.json())
}

export const addCategory = (newCategory) => {
  return fetch(`${remoteURL}/categories`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newCategory)
})
    .then(response => response.json())
}