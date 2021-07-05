import React from 'react';
import { View, Text,Button, FlatList,StyleSheet } from 'react-native';

const CategoriesScreen = props => {
   // console.log(props);
    return (
        <View style={styles.screen}>
            <Text> The Categories Screen  yes n</Text>
            <Button title="Go to Meals " onPress={() => {
                 props.navigation.navigate({routeName: 'CategoryMeals'});
                 //props.navigation.replace('CategoryMeals');//// কোন ব্যাক বাটন থাকবেনা এবং কোন এনিমেশন ছারাই স্ক্রিন মোভ করবে লগিন স্ক্রিনের জন্য এটি ব্যাবহত হয়
                //props.navigation.push('CategoryMeals');  ///Push user for relode samescreen for dropdown box etc and same screen with diffrent Content
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

export default CategoriesScreen;
 




