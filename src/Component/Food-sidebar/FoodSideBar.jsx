import React from 'react';

const FoodSideBar = ({item}) => {
    const {strMeal,strInstructions} = item;
    return (
        <div className='bg-rose-200 h-[100%] rounded-lg'>
            <h1 className='pt-4 text-center'>Recepie of {strMeal}</h1>
            <hr className='mt-4'/>
            <p className='pt-8 px-2'>{strInstructions}</p>
        </div>
    );
};

export default FoodSideBar;