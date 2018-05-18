import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator,
  DrawerNavigator,
  DrawerItems
} from 'react-navigation';

class LoginDrawerScreen extends React.Component {


  const MyApp = DrawerNavigator({
      HomeStack: { screen: HomeStack, },
      GameStack: { screen: GameStack, },
      BookStack: { screen: BookStack, }
    },
    {
      drawerWidth: 300,
      contentComponent: props => (
        <ScrollView>
          <View style={{padding:16,}}>
            <Text style={{fontSize:24}}>DRAWER TEST</Text>
          </View>
          <DrawerItems {...props} />
        </ScrollView>
      ),
    }
  );




const styles = StyleSheet.create({
  view1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1:{
    fontSize: 26,
  },
  icon1:{
    marginLeft: 16,
  },
  headerHome: {
    backgroundColor: '#CDDC39',
  },
  headerGame: {
    backgroundColor: '#4CAF50',
  },
  headerBook: {
    backgroundColor: '#FFC107',
  },
})

}

export default LoginDrawerScreen;
