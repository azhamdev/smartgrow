import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

import IC_Play from '../../assets/icons/play.png'

export default function ListVideo({ source, title, onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.contentWrapper} onPress={onPress}>
        <View style={styles.boxVideo}>
          <Image source={source} style={styles.thumbnail} />
        </View>
        <View style={styles.boxDesc}>
          <Text style={styles.text}>{title}</Text>
          <View style={styles.tonton}>
            <Text>
              Tonton video
            </Text>
            <Image source={IC_Play} style={styles.icPlay} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  boxVideo: {
    backgroundColor: "#E1E1E1",
    width: ms(100),
    height: ms(100),
    borderRadius: ms(12)
  },
  contentWrapper: {
    flexDirection: 'row',
    borderBottomWidth: ms(0.6),
    borderColor: '#A1a1a1',
    paddingBottom: ms(12),
    borderRadius: ms(7),
    marginBottom: ms(20)
  },
  thumbnail: {
    height: undefined,
    width: '100%',
    resizeMode: 'cover',
    aspectRatio: 1,
  },
  boxDesc: {
    paddingVertical: ms(16),
    paddingLeft: ms(14),
    paddingRight: ms(24),
  },
  text: {
    fontSize: ms(18),
    maxWidth: ms(240),
    fontWeight: '700',
    color: '#000',
  },
  tonton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: ms(24),
    marginTop: ms(12)
  },
  icPlay: {
    width: ms(20),
    height: ms(20),
    marginLeft: ms(10)
  }
})