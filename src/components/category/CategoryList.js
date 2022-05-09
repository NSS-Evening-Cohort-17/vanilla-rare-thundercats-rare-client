import React, {useState, useEffect} from 'react';
import { getAllCategories } from '../modules/CategoryManager';
import { CategoryCard } from './CategoryCard';

export const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then((categoriesFromAPI) => {
            setCategories(categoriesFromAPI)
        })
    }, []);

  return (
    <>
      <section className="category-list">
        <h1>Categories</h1>
        <div className="container-cards">
          {categories.map(category => <CategoryCard key={category.id} category={category} />)}
        </div>
      </section>
    </>
  );
};