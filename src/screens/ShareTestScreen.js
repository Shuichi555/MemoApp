import React from 'react';
import { StyleSheet, View, Image, Text, Settings, Share, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';


class ShareTestScreen extends React.Component {
/*
  openShare() {
    Share.share({
      title: 'タイトル',
      message: '概要'
    }, {}).then((result, activityType) => {
        if(result.action == Share.dismissedAction) {

        } else if(result.action == Share.sharedAction) {

        } else {

        }
    }
  };
}

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

export default ShareTestScreen;
