import React from 'react';
// import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';
import { StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import { Container, Header, Content, SwipeRow, View, Button, Icon, List, ListItem, Text } from 'native-base';

import Timestamp from 'react-timestamp';
import Moment from 'react-moment';
import 'moment-timezone';

import Swipeable from 'react-native-swipeable';

class MemoList extends React.Component {
  renderMemo({ item }) {
//  console.log(item);

    const timestamp = item.createdOn.seconds;
    const memoCreateDate = Date(timestamp);



/* return ORIGINAL 20180515
return (
    <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail', { memo: item }); }}>
    <View style={styles.memoListItem}>
      <Text style={styles.memoTitle}>{item.body.substring(0, 15)}</Text>
      <Text style={styles.memoDate}>{memoCreateDate.toString()}</Text>
    </View>
    </TouchableHighlight>
);

*/

    return (
          <SwipeRow
          leftOpenValue={0}
          rightOpenValue={-75}
            body={
              <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail', { memo: item }); }}>
                <View style={styles.memoListItem}>
                  <Text style={styles.memoTitle}>{item.body.substring(0, 15)}</Text>
                  <Text style={styles.memoDate}>{memoCreateDate.toString()}</Text>
                </View>
              </TouchableHighlight>
            }
            right={
              <Button danger onPress={() => alert('Trash')}>
                <Icon active name="trash" />
              </Button>
            }
          />
    );
  }

  render() {
    return (
      <View style={styles.memoList}>
        <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    // flexは画面全てをこの要素で覆う、という意味？
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },

});

export default MemoList;
