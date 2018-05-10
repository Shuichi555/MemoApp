import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';

import Timestamp from 'react-timestamp';
import Moment from 'react-moment';
import 'moment-timezone';

class MemoList extends React.Component {
  renderMemo({ item }) {
    console.log(item);

    const timestamp = item.createdOn.seconds;
    const memoCreateDate = Date(timestamp);


//    console.log(timestamp.toString(), "timestamp");
//    console.log(memoCreateDate.toString(), "memoCreateDate");

//    const memoCreateDateString = Moment(memoCreateDate).toString();
//    const memoCreateDateStringJP = memoCreateDateString.format('YYYY年MM月DD日 HH:mm');


/*
    const moment = new Moment(timestamp);
    console.log(moment);
*/
//    const date = moment.unix(timestamp);
//    console.log(date);


    return (
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail', { memo: item }); }}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{item.body.substring(0, 15)}</Text>
          <Text style={styles.memoDate}>{memoCreateDate.toString()}</Text>
        </View>
        </TouchableHighlight>
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
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
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
