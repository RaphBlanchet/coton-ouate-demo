import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {request} from 'react-native-permissions';
import {LocationPermission} from '../Const';
import HomeScreen from '../UI/Screens/HomeScreen';
import SplashScreen from '../UI/Screens/SplashScreen';

const Stack = createNativeStackNavigator();

const theme = {
  dark: true,
  colors: {...DefaultTheme.colors, background: '#222222'},
};

export default function RootNavigator() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(async () => {
      await request(LocationPermission);
      setReady(true);
    }, 2000);
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!ready ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        ) : (
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
