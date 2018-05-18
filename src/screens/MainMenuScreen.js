import React from 'react';
import { StyleSheet, View } from 'react-native';

import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MainMenuScreen extends React.Component {
  state = {
    memoList: [],
  }
  componentWillMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    // to avoid error
    const settings = {timestampsInSnapshots: true};
    db.settings(settings);

    db.collection(`users/${currentUser.uid}/memos`)
      .onSnapshot((snapshot) => {
        const memoList = [];
        snapshot.forEach((doc) => {
          memoList.push({ ...doc.data(), key: doc.id });
      });
      this.setState({ memoList });
    });
/*
      .get()
      .then((snapshot) => {
        const memoList = [];
  //    memoList.push(doc.data() { key: doc.id }); ↓こんな感じのイメージで実装したい
        snapshot.forEach((doc) => {
          memoList.push({ ...doc.data(), key: doc.id });
        });
//      this.setState({ memoList: memoList }); ↓下行のように書ける
        this.setState({ memoList });
      })
      .catch((error) => {
        console.log(error);
      });
*/
  }
  handlePress() {
//  const { params } = this.props.navigation.state;
//  this.props.navigation.navigate('MemoCreate', { currentUser: params.currentUser });
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
        <CircleButton onPress={this.handlePress.bind(this)}>
          {'\uf067'}
        </ CircleButton>
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

export default MainMenuScreen;
