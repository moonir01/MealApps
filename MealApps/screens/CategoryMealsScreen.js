import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> The Categories Meal Screen !</Text>
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
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;
