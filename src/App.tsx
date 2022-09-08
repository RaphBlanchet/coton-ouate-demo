import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './UI/Screens/HomeScreen';

const App = () => {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#222222',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="light-content" />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
