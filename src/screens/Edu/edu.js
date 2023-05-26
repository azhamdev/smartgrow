import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { ms } from 'react-native-size-matters'

// ilustrasi
import IL_Farm from '../../assets/ilustrasi/farmHouse.png'
import IL_Praktik from '../../assets/ilustrasi/praktik.png'
import IL_Chili from '../../assets/ilustrasi/chili.jpg'
import IL_Pot from '../../assets/ilustrasi/ilustrasi2.jpg'
import IL_Teori from '../../assets/ilustrasi/teori.png'

// components
import ListVideo from '../../components/ListVideo/ListVideo'
import Navbar from '../../components/Navbar/Navbar'

export default function Edu() {
  const Navigation = useNavigation()
  return (
    <View>
      <Navbar source={IL_Farm} text={"Smart Edu"} />
      <View style={styles.categories}>
        <TouchableOpacity onPress={() => Navigation.navigate('PraktikEdu')}>
          <Image source={IL_Praktik} style={styles.category} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.navigate('TeoriEdu')}>
          <Image source={IL_Teori} style={styles.category} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <ListVideo source={IL_Chili} title={"Teknik menanam cabai mudah hasil melimpah"} onPress={() => Navigation.navigate('DetailVideo', {
          title: "Cara mudah menanam wortel di polybag",
          videoId: "djS8_k5jez0"
        })} />
        <ListVideo source={IL_Pot} title={"Cara menyiapkan media tanam dari bahan bekas"} onPress={() => Navigation.navigate('DetailVideo', {
          title: "Cara mudah menanam wortel di polybag",
          videoId: "djS8_k5jez0"
        })} />
        <ListVideo source={IL_Chili} title={"Ciri ciri cabai yang segar"} onPress={() => Navigation.navigate('DetailVideo', {
          title: "Cara mudah menanam wortel di polybag",
          videoId: "djS8_k5jez0"
        })} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ms(20),
    marginTop: ms(24)
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: ms(20)
  },
  category: {
    height: ms(120),
    width: ms(164),
    resizeMode: 'contain'
  }
})