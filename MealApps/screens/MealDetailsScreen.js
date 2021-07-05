import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> The Meal Detail Screen !</Text>
            <Button title="Go Back to Cagegories " onPress={() => {
                //props.navigation.navigate({routeName: 'CategoryMeals'});
                //props.navigation.push('CategoryMeals');  ///Push user for relode samescreen for dropdown box etc and same screen with diffrent Content
                props.navigation.popToTop();// For Back to main screen
            }}/>
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
 
export default MealDetailScreen;
