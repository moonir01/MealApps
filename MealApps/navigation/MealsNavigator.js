import React from "react";
import { Platform, platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories !!!",
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    //mode:'modal',
    //initialRouteName:'MealDetail',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.PrimaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.PrimaryColor,
      // headerTitle: 'A Screen'// defual header title
    },
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabinfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabinfo.tintColor} />
        );
      },
     
    },
  }, //copy setup from MealsNavigator
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (tabinfo) => {
        return <Ionicons name="ios-star" size={25} color={tabinfo.tintColor} />;
      },
      tabBarColor:Colors.accentColor
    },
   
  }, // Call from favorit screen
};

//---------------Bottom TAB Navigator-------------------

const MealFavTabNavigator=
Platform.OS==='android'
 ? createMaterialBottomTabNavigator(tabScreenConfig,{
   activeColor: 'white',
   shifting: true,
   barStyle:{
     backgroundColor:Colors.PrimaryColor
   }

 })
 :createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    activeTintColor: Colors.accentColor,
  },
});

export default createAppContainer(MealFavTabNavigator); //MealsNavigator nested undwer  MealFavTabNavigator bcoz we can only use one root navigator in app container
