import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { Font } from 'expo';
import fontAwesome from '../../assets/fonts/fontawesome-webfont.ttf';

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    // 宣言
    const { style, color, onPress } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      // 複数色のボタンを使用するので配列で色データ設定(0番、1番、2番で上書きされる)
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
          {
            this.state.fontLoaded ? (
              <Text style={[styles.circleButtonTitle, { color: textColor }]}>
                {this.props.children}
              </Text>
          ) : null
        }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  circleButton: {
    width: 48,
    height: 48,
    margin: 8,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation:5,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 24,
    // backgroundColor: '#ddd',
    // width: 20,
    // height: 20,
  },
});

export default CircleButton;
