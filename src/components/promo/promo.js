import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ms } from 'react-native-size-matters'

export default function Promo({ source, onPress }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image source={source} style={styles.promo} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  promo: {
    height: ms(140),
    width: ms(300),
    resizeMode: 'cover',
    borderRadius: ms(12),
    marginLeft: ms(12)
  }
})