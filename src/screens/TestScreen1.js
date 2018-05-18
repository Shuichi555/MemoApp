import React from 'react';
import { CameraRoll, StyleSheet, View, Image, Text, Settings, Share, TouchableOpacity, TouchableHighlight } from 'react-native';
import { ImagePicker } from 'expo';


class TestScreen1 extends React.Component {

  state = {
    image: null,
  };

  render() {
    const { image } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ this._pickImage }>
          <Text>Pick an Image from Camera Roll</Text>
        </TouchableOpacity>
        { image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </ View>
    );
  }

  _pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if(!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDF6',
  },
});

export default TestScreen1;
