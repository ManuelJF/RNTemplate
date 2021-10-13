import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux'
import { enableScreens } from 'react-native-screens';
import { store } from './redux/store'
import AppStack from './routes/AppNavigator';
import Config from 'react-native-config'

console.log('ENV VARIABLES:', Config)

enableScreens()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};
 
export default App;
