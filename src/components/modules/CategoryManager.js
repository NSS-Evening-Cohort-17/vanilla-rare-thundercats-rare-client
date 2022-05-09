const remoteURL = "http://localhost:8088"

export const getAllCategories = () => {
  return fetch(`${remoteURL}/categories`)
  .then(res => res.json())
}