import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  state = {
    body: '',
    key: '',
  }

  componentWillMount() {
    console.log(this.props.navigation.state.params);
    const { params } = this.props.navigation.state;
//    this.setState({ body: params.memo.body, key: params.memo.key });
    this.setState({ body: params.body, key: params.key });
  }
  handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
//  const newDate = new Date();
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
      .update({
        body: this.state.body,
//      createdOn: newDate,
      })
      .then(() => {
        const { navigation } = this.props;
        navigation.state.params.returnMemo({
          body: this.state.body,
          key: this.state.key,
//        createdOn: newDate,
      });
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
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
        <CircleButton onPress={ this.handlePress.bind(this) }>
          {'\uf00c'}
        </CircleButton>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 50,

  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});
export default MemoEditScreen;
