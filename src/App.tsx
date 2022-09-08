import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {QueryClient, QueryClientProvider} from 'react-query';
import HomeScreen from './UI/Screens/HomeScreen';

const queryClient = new QueryClient();

const App = () => {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#222222',
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle="light-content" />
        <HomeScreen />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
