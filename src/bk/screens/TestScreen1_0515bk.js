import React from 'react';
import { StyleSheet, View, Image, Text, Settings, Share, TouchableOpacity, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';

import Swipeable from 'react-native-swipeable';

class TestScreen1 extends React.Component {

/*
leftContent = <Text>Pull to activate</Text>;

rightButtons = [
  <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
  <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
];
*/
  render() {
    return (
      <View style={styles.container}>

          <Text>View TestImage from local</Text>
          <Image style={{
             width: 64,
             height: 64,
             margintop: 32
           }}
           source ={ require ('../../assets/fonts/kensyu.png')}
          />

          <Text>View TestImage from https</Text>
          <Image style={{
             width: 64,
             height: 64,
             backgroundColor: '#0e0e0e'
           }}
           source ={{uri: 'http://facebook.github.io/react-native/img/header_logo.png'}}
          />
          <Swipeable leftContent={<Text>Pull to activate</Text>}
          rightButtons={<TouchableHighlight><Text>Button 1</Text></TouchableHighlight>}>
            <Text>My swipeable content</Text>
          </Swipeable>
      </ View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});

export default TestScreen1;
