import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import Activity1Screen from './src/screens/Activity1Screen';
import Activity2Screen from './src/screens/Activity2Screen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import FlexScreen from './src/screens/FlexScreen';
import ColorScreen from './src/screens/ColorScreen';
import ColorControlScreen from './src/screens/ColorControlScreen';
import TextInputScreen from './src/screens/TextInputScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Activity1: Activity1Screen,
    Activity2: Activity2Screen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Flex: FlexScreen,
    Color: ColorScreen,
    ColorControl: ColorControlScreen,
    TextInput: TextInputScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default navigator;