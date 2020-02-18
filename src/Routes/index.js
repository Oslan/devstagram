import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createStackNavigator} from '@react-navigation/stack';
import ReduxThunk from 'redux-thunk';
import Reducers from '../Reducers';
import Preload from '../screens/Preload';

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const Stack = createStackNavigator();

const Routes = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Preload"
        component={Preload}
        options={{headerTransparent: true, title:""}}
      />
      {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} /> */}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
