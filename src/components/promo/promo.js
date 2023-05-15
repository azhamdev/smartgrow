import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

export default function Promo({ source }) {
  return (
    <View>
      <TouchableOpacity>
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