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

//   const getCategories = () => {
//     return getAllCategories().then(categoriesFromAPI => {
//       setCategories(categoriesFromAPI)
//     });
//   };

//   useEffect(() => {
//     getCategories();
//   }, []);

  return (
    <div className="container-cards">
      {categories.map(category => <CategoryCard key={category.id} category={category} />)}
    </div>
    );
};



  