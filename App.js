
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './appsrc/HomeScreen';
import FirstComponents from './appsrc/first';
import ComponentsScreen from './appsrc/ComponentScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  First: FirstComponents,
  Components: ComponentsScreen
},

{
initalRouteName: 'ComponentsScreen',
defaultNavigationOption: {
  title: 'App'
}
});

export default createAppContainer(navigator);
