import React, { Component } from 'react';

//React.PropTypes has moved into a different package since React v15.5.
import PropTypes from 'prop-types';

//ReactNativeを使用したコンポーネントの呼び出し
import { StyleSheet, View, Image, Text, Dimensions, Platform } from 'react-native';
//NativeBaseを使用したコンポーネントの呼び出し
import { Container, Button, Content, ListItem, Separator, Icon } from 'native-base';

//import Drawer from 'react-native-drawer';

//幅と高さを取得する
const {
  width: DEVICE_WIDTH,
  height: DEVICE_HEIGHT
} = Dimensions.get('window');

//コンポーネントの内容を定義する ※ ClassComponent
class AppDrawer extends Component {

  //このコンポーネントのpropTypesの定義（this.propsで受け取れる情報に関するもの）
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired,
  };

  //コンポーネントの内容をレンダリングする
  render() {
    return (
      <Container style={styles.containerBackgroundStyle}>
        <View style={styles.containerHeaderStyle}>
          <Image style={styles.containerHeaderImageStyle} source={require('../../assets/otsuka_sample.jpg')} />
          <View style={styles.overlayStyle}>
            <Text style={styles.menuTextStyle}>大塚Deお買い物Menu</Text>
          </View>
        </View>
        <Content>
          {/* ドロワーメニューでのメニュー部分（コンポーネント表示切り替え） */}
          <Separator bordered>
            <Text>コンテンツ</Text>
          </Separator>
          <ListItem onPress={ () => {this.props.closeDrawer("ShopList")} }>
            <Icon ios='ios-pizza' android="md-pizza" style={{color: '#ffc125'}}/>
            <Text style={styles.menuTextStyle}>紹介お店一覧</Text>
          </ListItem>
          <ListItem onPress={ () => {this.props.closeDrawer("ColumnList")} }>
            <Icon ios='ios-book' android="ios-book" style={{color: '#ff6600'}}/>
            <Text style={styles.menuTextStyle}>コラム一覧</Text>
          </ListItem>
          <ListItem onPress={ () => {this.props.closeDrawer("MyPurchase")} } last>
            <Icon ios='ios-cart' android="md-cart" style={{color: '#ff3333'}}/>
            <Text style={styles.menuTextStyle}>Myお買い物</Text>
          </ListItem>
          {/* ドロワーメニューでのメニュー部分（WebViewでの表示） */}
          <Separator bordered>
            <Text>このサンプルに関して</Text>
          </Separator>
          <ListItem onPress={ () => {this.props.closeDrawer("GithubLink")} }>
            <Icon ios='logo-octocat' android="logo-octocat" style={{color: '#333333'}}/>
            <Text style={styles.menuTextStyle}>Githubへのリンク</Text>
          </ListItem>
          <ListItem onPress={ () => {this.props.closeDrawer("SlideshareLink")} }>
            <Icon ios='logo-linkedin' android="logo-linkedin" style={{color: '#0077b5'}}/>
            <Text style={styles.menuTextStyle}>SlideShareへのリンク</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

const styles = {
  containerBackgroundStyle: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
     shadowRadius: 3,
   },
   containerHeaderStyle: {
     backgroundColor: '#265366',
   },
   containerHeaderImageStyle: {
     width: 32,
     height: 32,
     margintop: 10,
   },
   overlayStyle: {
     backgroundColor: '#fff',
   },
   menuTextStyle: {
     fontSize: 10,
     color: '#DDD',
   },
};

//インポート可能にする宣言
export default AppDrawer;
