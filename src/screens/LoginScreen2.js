import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, Image, Platform } from 'react-native';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { Container, Drawer, Header, Left, Right, Title, Body, Button, Icon } from 'native-base';

import PropTypes from 'prop-types';

import AppDrawer from '../components/AppDrawer';
import CommonHeader from '../components/CommonHeader';


class LoginScreen extends React.Component {

  // Drawerコンポーネント用　
  //コンストラクタ
  constructor(props) {
    super(props);

    //ステートの初期化を行う
    this.state = { drawerOpen: false, drawerDisabled: false, itemSelected: 'ShopList' };
  }

  //ドロワーメニューを閉じる際に関する設定をする
  closeDrawer = (item) => {
    this.setState({itemSelected: item})
    this._drawer._root.close()
  };

  //ドロワーメニューを開く際に関する設定をする
  openDrawer = () => {
    this._drawer._root.open()
  };

  //ドロワーメニューに対応したシーンの切り替えをする
  _onItemSelected = (selected) => {
    switch (selected) {
      case "ShopList":
        return <View><Text>Select ShopList</Text></View>
      case "ColumnList":
      return <View><Text>Select ColumnList</Text></View>
      case "MyPurchase":
      return <View><Text>Select MyPurchase</Text></View>
      case "GithubLink":
        return <WebView source={{uri: 'https://github.com/fumiyasac/LikeCustomTransition'}} />
      case "SlideshareLink":
        return <WebView source={{uri: 'https://www.slideshare.net/fumiyasakai37/nativebaseui'}} />
      default:
      return <View><Text>Nothing Selected</Text></View>
    }
  };

  //ドロワーメニューに対応したタイトルの切り替えをする
  _onTitleSelected = (selected) => {
    switch (selected) {
      case "ShopList":
        return "紹介お店一覧"
      case "ColumnList":
        return "コラム一覧"
      case "MyPurchase":
        return "Myお買い物"
      case "GithubLink":
        return "リポジトリ"
      case "SlideshareLink":
        return "スライド"
      default:
        return "未選択"
    }
  };
// end of Drawer

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

  handlePress() {
    this.props.navigation.navigate('Signup');
  }

  handlePress() {
    this.props.navigation.navigate('TestMenu');
  }
// <TextInput の　onChangeText= ~ が同様の動作をするため削除
//  handleChangeText(text) {
//    this.setState({ email: text });
//  }

  render() {
    return (
      <View style={styles.container}>

      <Drawer
        ref={ (ref) => this._drawer = ref }
        type={(Platform.OS === 'ios') ? "static" : "overlay"}
        content={
          <AppDrawer closeDrawer={this.closeDrawer} />
        }
        onOpen={ () => {
          this.setState({drawerOpen: true})
        }}
        onClose={ () => {
          this.setState({drawerOpen: false})
        }}
        tweenHandler={ (ratio) => {
          return {
            mainOverlay: { opacity: ratio / 2, backgroundColor: 'black' }
          }
        }}
        captureGestures={true}
        tweenDuration={200}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={ (viewport) => {
          return 80
        }}
        side={"left"}
        closedDrawerOffset={ () => 0 }
        panOpenMask={0.04}
        negotiatePan={true}
        >
        <CommonHeader title={this._onTitleSelected(this.state.itemSelected)} icon={"menu"} onPress={ () => this.openDrawer() } />
        <Container>
          {this._onItemSelected(this.state.itemSelected)}
        </Container>
      </Drawer>

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

        <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)}>
          <Text style={styles.signupText}>メンバー登録する</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)}>
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
