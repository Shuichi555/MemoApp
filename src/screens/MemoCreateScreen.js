import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }
  handlePress() {
//  const { params } = this.props.navigation.state;

    const db = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    db.settings(settings);

//    const timestamp = snapshot.get('created_at');
//    const date = timestamp.toDate();

    const { currentUser } = firebase.auth();

    // 変数を代入するため　"``"　を使用
      db.collection(`users/${currentUser.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
//      createdOn: date,
    })
        .then(() => {
          this.props.navigation.goBack();
      })
        .catch((error) => {
          console.log(error)
      });

  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
          underlineColorAndroid="transparent"
          textAlignVertical="top"

          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="never"
          enablesReturnKeyAutomatically={true}
        />
        <CircleButton onPress={this.handlePress.bind(this)}>
          {'\uf00c'}
        </ CircleButton>
      </ View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
//    autoCapitalize="none",
//    autoCollect={false},
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});
export default MemoCreateScreen;
