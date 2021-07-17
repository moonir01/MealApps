import { platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
import FavoritesScreen  from '../screens/FiltersScreen';
import Colors from '../constants/Colors';


const MealsNavigator = createStackNavigator(

  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories !!!'
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
  },
  {
    //mode:'modal',
    //initialRouteName:'MealDetail',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.PrimaryColor : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.PrimaryColor,
     // headerTitle: 'A Screen'// defual header title
    }

  }

);

//---------------Bottom TAB Navigator-------------------

const MealFavTabNavigator = createBottomTabNavigator({
  Meals:MealsNavigator ,//copy setup from MealsNavigator
  Favorites: FavoritesScreen// Call from favorit screen
});

export default createAppContainer(MealFavTabNavigator);//MealsNavigator nested undwer  MealFavTabNavigator bcoz we can only use one root navigator in app container
