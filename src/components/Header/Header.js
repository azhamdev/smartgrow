import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

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
    width: ms(353),
    height: ms(138),
    backgroundColor: `${color}`,
    borderRadius: ms(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: ms(16)
  },
  image: {
    height: ms(173),
    width: ms(175),
    bottom: ms(15)
  },
  text: {
    width: ms(160),
    fontSize: ms(18),
    color: '#000',
    fontWeight: '600',
    lineHeight: ms(24)
  },
})