const remoteURL = "http://localhost:8088"

export const getAllCategories = () => {
  return fetch(`${remoteURL}/categories`)
  .then(res => res.json())

}

// export const getCategoryById = (category_id) => {
//   //be sure your categories have good data and related to a user and category
//   return fetch(`${remoteURL}/categories/${category_id}`)
//   .then(res => res.json())
// }