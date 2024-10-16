import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Sreens/Login';
import Signup from './Sreens/Signup';
import Dashboard from './Dashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Define the Login screen */}
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login' }} 
        />

        {/* Define the Signup screen */}
        <Stack.Screen 
          name="Signup" 
          component={Signup} 
          options={{ title: 'Signup' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    
    {/* <Dashboard/> */}
    </>
  );
}

export default App;
