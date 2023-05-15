import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ms } from 'react-native-size-matters'

import IC_Back from '../../assets/icons/leftArrow.png'

export default function Navbar() {
  const Navigation = useNavigation()
  return (
    <View style={styles.navbarBg}>
      <TouchableOpacity onPress={() => Navigation.goBack()}>
        <Image source={IC_Back} style={styles.arrowBack} />
      </TouchableOpacity>
      <View style={styles.navbarText}>
        <Text style={styles.text}>
          Mau belajar apa hari ini ?
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navbarBg: {
    backgroundColor: '#1F8A70',
    paddingHorizontal: ms(12),
    paddingVertical: ms(20),
    flexDirection: 'row',
    borderBottomLeftRadius: ms(12),
    borderBottomEndRadius: ms(12)
  },
  arrowBack: {
    width: ms(34),
    height: ms(34)
  },
  navbarText: {
    marginLeft: ms(12),
    justifyContent: 'center'
  },
  text: {
    fontSize: ms(14),
    fontWeight: '700',
    color: '#FFF'
  }
})