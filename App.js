import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import { Platform, Image } from 'react-native';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import TestMenuScreen from './src/screens/TestMenuScreen';
import TestScreen1 from './src/screens/TestScreen1';
import TestScreen2 from './src/screens/TestScreen2';
import ShareTestScreen from './src/screens/ShareTestScreen';
//import DrawerNativeBase from './src/screens/DrawerNativeBaseScreen';

import AppSidebar from './src/components/AppSidebar';

import AppDrawer from './src/components/AppDrawer';
import CommonHeader from './src/components/CommonHeader';


import ENV from './env.json';

// firebase DB
require("firebase/firestore");

// var -> const
const config = {
  apiKey:             ENV.FIREBASE_API_KEY,
  authDomain:         ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:        ENV.FIREBASE_DB_URL,
  projectId:          ENV.FIREBASE_PRJ_ID,
  storageBucket:      ENV.FIREBASE_STORAGE,
  messagingSenderId:  ENV.FIREBASE_SENDER_ID
};
firebase.initializeApp(config);

const App = StackNavigator({
  Login:            { screen: LoginScreen },
  Signup:           { screen: SignupScreen },
  TestMenu:         { screen: TestMenuScreen },
  Home:             { screen: MemoListScreen },
  MemoDetail:       { screen: MemoDetailScreen },
  MemoEdit:         { screen: MemoEditScreen },
  MemoCreate:       { screen: MemoCreateScreen },
  Test1:            { screen: TestScreen1 },
  Test2:            { screen: TestScreen2 },
  ShareTest:        { screen: ShareTestScreen },
  AppSidebar:       { screen: AppSidebar },
//  DrawerNativeBase: { screen: DrawerNativeBaseScreen },
}, {
  navigationOptions: {
    headerTitle: "MEMOT!!",
    headerBackTitle: null,
    headerTintColor: '#fff',
    headerStyle: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      backgroundColor: '#265366',
      ...Platform.select({
        android: {
          height: 80,
          paddingTop: 20,
        },
      }),
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});


export default App;
