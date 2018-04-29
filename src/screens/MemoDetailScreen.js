import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Moment from 'moment';

import CircleButton from '../elements/CircleButton';

//moment().format("YYYY-MM-DD HH:mm:SS")  // 2018-01-30 10:58:05
//  const dateString = moment().format("YYYY-MM-DD HH:mm:SS");


const timeStamp = new Date().getTime();
//  moment(timestamp)

//const dateString = (date) => {
//  const str = date.toISOString();
//  return str.split('T')[0];
//};

//render(){
//  const date = Moment.locale('en');
//  return date;
//}

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }

  returnMemo(memo) {
    this.setState({ memo });
  }

  render() {
    const { memo } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>{memo.body.substring(0, 15)}</Text>
              <Text style={styles.memoHeaderDate}>2018/04/29</Text>
            </View>
          </View>
        </View>
        <View style={styles.memoContents}>
          <Text style={styles.memoBody}>
            {memo.body}
          </Text>
        </View>
        <CircleButton
          color="white"
          style={styles.editButton}
          onPress={() => { this.props.navigation.navigate('MemoEdit', { ...memo,returnMemo: this.returnMemo.bind(this) }); }}>
          {'\uf040'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContents: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  memoBody: {
    lineHeight: 22,
    fontSize: 15,
  },
  editButton: {
    top: 35,
  },
});

export default MemoDetailScreen;
