import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

import IC_Play from '../../assets/icons/play.png'


export default function ListVideo({ source, title, onPress }) {
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.boxVideo}>
        <Image source={source} style={styles.thumbnail} />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Image source={IC_Play} style={styles.play} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: '#FFF',
    width: '100%',
    height: ms(94),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: ms(10),
    borderRadius: ms(10),
    shadowColor: "#acacac",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    marginBottom: ms(18)
  },
  boxVideo: {
    height: ms(80),
    width: ms(80),
    backgroundColor: 'grey',
    borderRadius: ms(28)
  },
  textBox: {
    width: ms(158)
  },
  play: {
    width: ms(45),
    height: ms(45)
  },
  thumbnail: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: ms(28)
  },
  title: {
    fontSize: ms(14),
    fontWeight: '600',
    color: '#000'
  }
})