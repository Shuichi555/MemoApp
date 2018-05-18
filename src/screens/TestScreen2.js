import React from 'react';
import { CameraRoll, StyleSheet, View, Image, Text, Settings, Share, TouchableOpacity, TouchableHighlight } from 'react-native';
import { ImagePicker } from 'expo';

import Masonry from 'react-native-masonry';

class TestScreen2 extends React.Component {

  state = {
    image: [],
  }

  componentWillMount() {
    const { image } = this.state;

    CameraRoll.getPhotos({
      first: 5,
      assetType: 'Photos',
    })
    .then( r => {
      this.setState({ photos: r.edges });
    })
    .catch((err) => {
        //Error Loading Images
    });
  };


  render() {

    return (
      <View style={styles.container}>
        <Masonry
          columns={3}
          bricks={ this.state.photos }
        />
      </ View>
    );
  }

/*
  _pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if(!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

*/

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
//    backgroundColor: '#FFFDF6',
  },
});

export default TestScreen2;
