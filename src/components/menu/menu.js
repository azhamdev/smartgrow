import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ms } from 'react-native-size-matters'

export default function Menu({ source, title, onPress }) {
  return (
    <View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
          <Image source={source} style={styles.icon} />
        </TouchableOpacity>
        <Text style={{ marginTop: ms(10), color: 'black' }}>
          {title}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: ms(24)
  },
  iconContainer: {
    backgroundColor: '#1F8A70',
    width: ms(48),
    height: ms(48),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ms(14)
  },
  icon: {
    height: ms(32),
    width: ms(32)
  },
  iconsWrapper: {
    alignItems: 'center'
  },
})