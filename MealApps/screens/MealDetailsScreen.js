import React, { useEffect, useCallback } from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = (props) => {
  //Props on Same Screen
  return (
    <View style={styles.ListItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    //props.navigation.setParams({mealTitle : selectedMeal.title});
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity}</DefaultText>
        <DefaultText>{selectedMeal.affordability}</DefaultText>
      </View>

      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}

      {/* <View style={styles.screen}>
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
      </View> */}
    </ScrollView>
  );
};
MealDetailScreen.navigationOptions = (navigationData) => {
  // const mealId = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  //const selectMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: mealTitle,
    //headerRight: <Text>Helo244</Text>
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={toggleFavorite} />
      </HeaderButtons>
    ),

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
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  ListItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
