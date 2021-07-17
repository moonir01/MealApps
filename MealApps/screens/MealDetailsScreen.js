import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";


import { MEAL, MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectMeal.title}</Text>
      <Text> The Meal Detail Screen !</Text>
      <Button
        title="Go Back to Cagegories "
        onPress={() => {
          //props.navigation.navigate({routeName: 'CategoryMeals'});
          //props.navigation.push('CategoryMeals');  ///Push user for relode samescreen for dropdown box etc and same screen with diffrent Content
          props.navigation.popToTop(); // For Back to main screen
        }}
      />
    </View>
  );
};
MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectMeal.title,
    //headerRight: <Text>Helo244</Text>
    headerRight:
    
    (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as favorite");
          }}
        />
           <Item
          title="Favorite"
          iconName="ios-star-outline"
          onPress={() => {
            console.log("Mark as favorite");
          }}
        />
      </HeaderButtons>
    )


    // () => (
    //   <Button
    //     onPress={() => alert('This is a button!')}
    //     title="Info"
    //     color='red'
    //   />
    // )


  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
