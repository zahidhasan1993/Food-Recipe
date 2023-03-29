import React from "react";

const FoodCard = (props) => {
  // console.log(props.food);
  const handleSingleFood = props.handleSingleFood;
  // console.log(handleSingleFood);
  const {strMeal,strMealThumb,strInstructions,strCategory} = props.food;
  return (
    <div className="card w-[100%] bg-base-100 shadow-xl ">
      <figure>
        <img
          src={strMealThumb}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Dish Name : {strMeal}</h2>
        <p>Category : {strCategory}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => handleSingleFood(props.food)}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
