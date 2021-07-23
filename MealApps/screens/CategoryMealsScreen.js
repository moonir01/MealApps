import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";


const CategoryMealScreen = (props) => {
 
  const catId = props.navigation.getParam("categoryId");
  //const selectedCategory = CATEGORIES.find(cat => cat.id === catId);// find item id from dummy- data

  const displayedMeal = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData ={displayedMeal} navigation ={props.navigation}/>
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  //console.log(navigationData);
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId); // find item id from dummy- data

  return {
    headerTitle: selectedCategory.title,
  };
};



export default CategoryMealScreen;
