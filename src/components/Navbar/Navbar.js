import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ms } from 'react-native-size-matters'

import IC_Back from '../../assets/icons/leftArrow.png'

const windowWidth = Dimensions.get('window').width;


export default function Navbar({ text }) {
  const Navigation = useNavigation()
  return (
    <View style={styles.navbarBg}>
      <TouchableOpacity onPress={() => Navigation.goBack()}>
        <Image source={IC_Back} style={styles.arrowBack} />
      </TouchableOpacity>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbarBg: {
    paddingHorizontal: ms(12),
    paddingTop: ms(27),
    marginBottom: ms(14),
    flexDirection: 'row',
    alignItems: 'center'
  },
  arrowBack: {
    width: ms(24),
    height: ms(24)
  },
  text: {
    fontSize: ms(16),
    color: '#000',
    flex: 1,
    width: windowWidth - ms(12),
    fontWeight: '700',
    marginLeft: ms(12),
    flexWrap: 'wrap',
  }
})