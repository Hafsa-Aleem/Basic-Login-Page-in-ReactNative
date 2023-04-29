import { createStackNavigator } from '@react-navigation/stack';
import ContactUs from './ContactUs';
import Home from './Home';
import About from './About';
import MyDrawer from './Drawer';
import MyTab from './TabScreen';
import HomeScreen from '../component/HomeScreen';
import AboutScreen from '../component/AboutScreen';

const Stack = createStackNavigator();

const Navigation=()=> {
  return (
    <Stack.Navigator screenOptions={{
      headerMode: 'screen',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#627E8B' },
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="AboutScreen" component={AboutScreen}/>
      {/* <Stack.Screen name="Tab" component={MyTab}/>
      <Stack.Screen name="drawer" component={MyDrawer}/>
      <Stack.Screen name="home" component={Home}/>
      <Stack.Screen name="about" component={About} options={{
          title: 'My profile',
        }}/>
      <Stack.Screen name="service" component={ContactUs}/> */}
    </Stack.Navigator>
    );
}
export default Navigation