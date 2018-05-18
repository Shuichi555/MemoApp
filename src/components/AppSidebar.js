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
            source ={ require ('../../assets/drawer-cover.png')}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }} />
            <Image
              source ={ require ('../../assets/logo-kitchen-sink.png')}
              square
              style={{ height: 80, width: 70 }}
            />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
//    width: '75%',
//    backgroundColor: '#FFFDF6',
  },
});
