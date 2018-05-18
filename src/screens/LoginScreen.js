import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, Image, Platform } from 'react-native';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { Container, Drawer, Header, Left, Right, Title, Body, Button, Icon } from 'native-base';

import CircleButton from '../elements/CircleButton';
import AppSidebar from '../components/AppSidebar';

class LoginScreen extends React.Component {

  state = {
    email: 'user1@example.com',
    password: 'password'
  };

  // eslint-disable-nextline
  handleSubmit() {
    // Log in!!
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log("success", user);
//      this.props.navigation.navigate('Home', { currentUser: user });
//       this.props.navigation.navigate('Home');

        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch((error) => {
        console.log("error!", error);
      });
  }

  //Drawerのためにボタン追加
  handlePress() {
  //  const { params } = this.props.navigation.state;
  //  this.props.navigation.navigate('MemoCreate', { currentUser: params.currentUser });
//    this.props.navigation.navigate('AppSidebar');
    this.drawer._root.open()
  }

  render() {
// drawer
//    Drawer = this.drawer;

    closeDrawer = () => {
//      Drawer._root.close()
      this.drawer._root.close()
    };
    openDrawer = () => {
//      Drawer._root.open()
      this.drawer._root.open()
    };

// Drawer last
//    onClose={() => this.closeDrawer()} >


    return (
        <View style={styles.container}>
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<AppSidebar navigator={this.navigator} />}
          onClose={() => this.drawer._root.close()} >
        </Drawer>
        <CircleButton onPress={this.handlePress.bind(this)}>
          {'\uf067'}
        </ CircleButton>
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCollect={false}
          placeholder="Email Address"
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none"
          autoCollect={false}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#C70F66"
          onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.buttonTitle}>
            ログインする
          </Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.signup} onPress={() => this.props.navigation.navigate('Signup', {})}>
          <Text style={styles.signupText}>メンバー登録する</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signup} onPress={() => this.props.navigation.navigate('TestMenu', {})}>
          <Text style={styles.signupText}>GoTo TestMenu</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
  signup: {
    marginTop: 16,
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 16,
  },
});
export default LoginScreen;
