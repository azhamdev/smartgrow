import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ms } from 'react-native-size-matters';

const windowWidth = Dimensions.get('window').width;

export default function Header({ source, bgcolor, headline }) {
  return (
    <View style={styles(bgcolor).wrapper}>
      <Text style={styles().text}>
        {headline}
      </Text>
      <Image source={source} style={styles().image} />
    </View>
  )
}

const styles = (color) => StyleSheet.create({
  wrapper: {
    width: windowWidth - ms(24),
    height: ms(138),
    backgroundColor: `${color}`,
    borderRadius: ms(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: ms(16),
  },
  image: {
    height: ms(173),
    // width: ms(175),
    width: '50%',
    bottom: ms(15),
    resizeMode: 'contain'
  },
  text: {
    width: ms(160),
    fontSize: ms(18),
    color: '#000',
    fontWeight: '600',
    lineHeight: ms(24)
  },
})