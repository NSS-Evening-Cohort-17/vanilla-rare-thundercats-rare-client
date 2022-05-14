import React, { useState, useEffect } from "react"
import {useParams, useHistory} from "react-router-dom"
import {getCategoryById, updateCategory} from "../modules/CategoryManager"

export const CategoryEditForm = () => {
  const [category, setCategory] = useState({ label: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {categoryId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...category };
    stateToChange[evt.target.id] = evt.target.value;
    setCategory(stateToChange);
  }

  const updateExistingCategory = evt => {
    evt.preventDefault()
    setIsLoading(true);

    updateCategory(category) 
      .then(() => history.push("/categories")
      )
  }

  const editedCategory = {
    id: categoryId,
    label: category.label
  };

  useEffect(() => {
    getCategoryById(categoryId)
      .then(category => {
        setCategory(category)
        setIsLoading(false)
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="label"
              value={category.label}
              placeholder="Enter a category"
              />
              <label htmlFor="label">Label</label>
          </div>
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingCategory}
              className="btn btn-primary"
              >Submit</button>
        </fieldset>
      </form>
    </>
  );
}