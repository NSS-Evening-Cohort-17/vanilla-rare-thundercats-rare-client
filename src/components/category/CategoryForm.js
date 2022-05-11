import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { addCategory } from "../modules/CategoryManager";

export const CategoryForm = () => {
    const [category, setCategory] = useState({
        label: "",
        categoryId: 1
    });

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
      const newCategory = { ...category }
      let selectedVal = event.target.value
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      newCategory[event.target.id] = selectedVal
      
      setCategory(newCategory)
    }

    const handleClickSaveCategory = (event) => {
      event.preventDefault()
  
      if (category.categoryId === 0) {
        window.alert("Please enter a category")
      } else {
        addCategory(category)
          .then(() => {history.push("/categories")})
      }
    }
    return (
      <form className="categoryForm">
          <h2 className="categoryForm__title">New Category</h2>
          <fieldset>
				<div className="form-group">
            <label htmlFor="name">Category label:</label>
            <input type="text" id="label" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Category Label" value={category.label} />
				</div>
			</fieldset>
      <button className="btn btn-primary"
          onClick={handleClickSaveCategory}>
          Save Category
      </button>
		</form>
	)
}
