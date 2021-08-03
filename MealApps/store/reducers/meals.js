import {MEALS} from '../../data/dummy-data';
import  {TOGGLE_FAVORITE} from '../actions/meals';
const initalState ={
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state =  initalState, action) =>{
    switch (action.type){
        case TOGGLE_FAVORITE:
             const existingIndex  = state.favoriteMeals.findIndex(
                 meal => meal.id===action.mealId);
             if (existingIndex >=0) {
                 const updatedFavMeal =[...state,favoriteMeals];
                 updatedFavMeal.splice(existingIndex,1);
                 return{...state, favoriteMeals: updatedFavMeal};
             }
             else{
                 const meal =state.meals.find (meal=> meal.id=== action.mealId)
                 return{...state, favoriteMeals: state.favoriteMeals.concat(meal)}

             }
            default://swithc statement have one default 
                return state;


    }
    return state;
}
 
export default mealsReducer;