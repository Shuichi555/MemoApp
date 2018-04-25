import { StyleSheet, View, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const App = StackNavigator({
  Login:      { screen: LoginScreen },
  Signup:     { screen: SignupScreen },
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
}, {
  navigationOptions: {
    headerTitle: "Memot",
    headerBackTitle: null,
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});


export default App;
