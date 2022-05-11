import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import { getAllCategories } from '../modules/CategoryManager';
import { CategoryCard } from './CategoryCard';

export const CategoryList = () => {
    const [categories, setCategories] = useState([])

    const history = useHistory()

    useEffect(() => {
        getAllCategories().then((categoriesFromAPI) => {
            setCategories(categoriesFromAPI)
        })
    }, []);

  return (
    <>
      <section className="category-list">
        <h1>Categories</h1>
        <button type="button"
            className="btn"
            onClick={() => {history.push("/categories/create")}}>
            Create Category
        </button>
        <div className="container-cards">
          {categories.map(category => <CategoryCard key={category.id} category={category} />)}
        </div>
      </section>
    </>
  );
  
};



  