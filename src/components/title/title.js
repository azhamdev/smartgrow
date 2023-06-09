import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ms } from 'react-native-size-matters'

export default function Title({ name, subtitle }) {
  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: ms(18),
    fontWeight: '700',
    marginBottom: ms(1)
  },
  subtitle: {
    marginBottom: ms(20),
    paddingRight: ms(20),
    color: '#000',
    lineHeight: ms(18)
  }
})