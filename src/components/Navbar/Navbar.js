import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ms } from 'react-native-size-matters'

import IC_Back from '../../assets/icons/leftArrow.png'


export default function Navbar({ source, text }) {
  const Navigation = useNavigation()
  return (
    <View style={styles.navbarBg}>
      <TouchableOpacity onPress={() => Navigation.goBack()}>
        <Image source={IC_Back} style={styles.arrowBack} />
      </TouchableOpacity>
      <View style={styles.navbarIL}>
        <View style={styles.textBox}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.ILBox}>
          <Image source={source} style={styles.navbarImage} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navbarBg: {
    height: ms(200),
    backgroundColor: '#ABC270',
    paddingLeft: ms(14),
    paddingVertical: ms(20),
    flexDirection: 'row',
    borderBottomLeftRadius: ms(20),
    borderBottomEndRadius: ms(20)
  },
  arrowBack: {
    width: ms(34),
    height: ms(34)
  },
  navbarIL: {
    marginLeft: ms(12),
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
  },
  navbarImage: {
    width: ms(170),
    height: ms(170),
  },
  ILBox: {
    justifyContent: 'flex-end'
  },
  textBox: {
    justifyContent: 'flex-end',
    marginRight: ms(12)
  },
  text: {
    fontSize: ms(24),
    color: '#FFF',
    maxWidth: ms(160),
    fontWeight: '700'
  }
})