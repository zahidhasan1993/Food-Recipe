import React, { useEffect, useState } from 'react';
import FoodCard from '../Food-card/FoodCard';
import FoodSideBar from '../Food-sidebar/FoodSideBar';

const Recipes = () => {
    const [foods,setFoods] = useState([]);
    const [singleItem, setSingleItem] = useState([]);
    
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    },[])

    const handleSingleFood = (item) => {
        setSingleItem(item);
    }

    // const newFoods = foods.meals;
    // console.log(singleItem);
    return (
        <div className='food-container mt-12 grid grid-cols-4 gap-3'>
            <div className='recipe grid grid-cols-3 gap-6 col-span-3'>
             {
                foods.map(food => <FoodCard key={food.idMeal} food={food} handleSingleFood={handleSingleFood}></FoodCard>)
             }
            </div>
            <div className='details'>
             <FoodSideBar key={singleItem.idMeal} item={singleItem}></FoodSideBar>
            </div>
            
        </div>
    );
};

export default Recipes;