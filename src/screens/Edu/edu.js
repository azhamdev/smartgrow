import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

// ilustrasi
import IL_Farm from '../../assets/ilustrasi/farmHouse.png'
import IL_Wortel from '../../assets/ilustrasi/tanamWortel.png'
import IL_Tomat from '../../assets/ilustrasi/tomat.png'

// components
import Navbar from '../../components/Navbar/Navbar'
import ListVideo from '../../components/ListVideo/ListVideo'

export default function Edu() {
  const Navigation = useNavigation()
  return (
    <View>
      <Navbar source={IL_Farm} text={"Smart Grow Education"} />
      <View style={styles.container}>
        <ListVideo source={IL_Wortel} title={"Cara mudah menanam wortel di polybag"} onPress={() => Navigation.navigate('DetailVideo', {
          title: "Cara mudah menanam wortel di polybag",
          videoId: "djS8_k5jez0"
        })} />
        <ListVideo source={IL_Tomat} title={"Semua bisa menanam tomat dengan benar"} onPress={() => Navigation.navigate('DetailVideo', {
          title: "Semua bisa menanam tomat dengan benar",
          videoId: "WOpnA9pyno4"
        })} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ms(14),
    marginTop: ms(24)
  }
})