import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';


const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);// find item id from dummy- data
    return (
        <View style={styles.screen}>
            <Text> The Categories Meal Screen !</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Details " onPress={() => {
                props.navigation.navigate({ routeName: 'MealDetail' });
                //props.navigation.push('CategoryMeals');  ///Push user for relode samescreen for dropdown box etc and same screen with diffrent Content
            }} />
            <Button title="Go Back" onPress={() => {
                props.navigation.goBack();
                //props.navigation.pop();////Alternative for go back
            }} />
        </View>
    );
};

CategoryMealScreen.navigationOptions = navigationData => {
    //console.log(navigationData);
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);// find item id from dummy- data

    return {
        headerTitle: selectedCategory.title,

    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;
