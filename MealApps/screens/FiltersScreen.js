import React from 'react';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { View, Text, StyleSheet } from 'react-native';

const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> The Filters Screen !</Text>
        </View>
    );
};



FiltersScreen.navigationOptions = (navData) => {
    return {
      headerTitle: "Filters Meal  ",
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    };
  };

  const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default FiltersScreen;
