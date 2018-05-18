import React from "react";
import { StyleSheet, View, AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";

const routes = ["Home", "Chat", "Profile"];
export default class AppSidebar extends React.Component {

/* original backup
  <List
    dataArray={routes}
    renderRow={data => {
      return (
        <ListItem
          button
          onPress={() => this.props.navigation.navigate(data)}>
          <Text>{data}</Text>
        </ListItem>
      );
    }}
  />
*/
/*
<Container>
  <Content>
  </Content>
</Container>
*/

  render() {
    return (
      <View style={styles.container}>
          <Image
            source={{
              uri: 'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png'
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }} />
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: 'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png'
              }}
            />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '75%',
    backgroundColor: '#FFFDF6',
  },
});
