import { platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.PrimaryColor : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.PrimaryColor
    }
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.PrimaryColor : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.PrimaryColor
    }
  },
  MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);
