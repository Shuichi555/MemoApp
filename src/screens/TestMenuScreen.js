import React from 'react';
import { StyleSheet, View, Image, Text, Settings, Share, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';


class TestMenuScreen extends React.Component {

//  const nextScreenName = '';
/*
  handlePress() {
    this.props.navigation.navigate('Test1');
  }
*/

/*
  handlePress() {
    this.props.navigation.navigate('ShareTest');
  }

*/

/* 下記 TouchableOpacity の　バックアップ
<TouchableOpacity style={styles.testmenu} onPress={this.handlePress.bind(this)}>
  <Text style={styles.testmenuText}>GoTo TestScreen1</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.testmenu} onPress={this.handlePress.bind(this)}>
  <Text style={styles.testmenuText}>GoTo ShareTestScreen</Text>
</TouchableOpacity>


*/

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.testmenu} onPress={() => this.props.navigation.navigate('Test1', {})}>
          <Text style={styles.testmenuText}>Test1 ライブラリから1画像選択</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.testmenu} onPress={() => this.props.navigation.navigate('Test2', {})}>
          <Text style={styles.testmenuText}>Test2 ライブラリ画像表示</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.testmenu} onPress={() => this.props.navigation.navigate('ShareTest', {})}>
          <Text style={styles.testmenuText}>ShareTestScreen</Text>
        </TouchableOpacity>
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
  testmenu: {
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center',
  },
  testmenuText: {
    fontSize: 16,
  },

});

export default TestMenuScreen;
