import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ms } from 'react-native-size-matters'
import ListVideo from '../../components/ListVideo/ListVideo'
import { useNavigation } from '@react-navigation/native'

// ilustrasi
import IL_Praktik from '../../assets/ilustrasi/smartEdu1Full.png'
import IL_Chili from '../../assets/ilustrasi/chili.jpg'
import IL_Pot from '../../assets/ilustrasi/ilustrasi2.jpg'

export default function Praktik() {
  const Navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Navbar text={"Praktik"} />
      <View style={styles.ilustrasiWrapper}>
        <Image source={IL_Praktik} style={styles.ilustrasi} />
      </View>
      <View style={styles.listContainer}>
        <ListVideo source={IL_Chili} title={"Teknik menanam cabai mudah hasil melimpah"} onPress={() => Navigation.navigate('DetailVideo', {
          title: "Cara mudah menanam wortel di polybag",
          videoId: "djS8_k5jez0"
        })} />
        <ListVideo source={IL_Pot} title={"Cara menyiapkan media tanam dari bahan bekas"} onPress={() => Navigation.navigate('DetailVideo', {
          title: "Cara mudah menanam wortel di polybag",
          videoId: "djS8_k5jez0"
        })} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1
  },
  ilustrasi: {
    width: ms(281),
    height: ms(281)
  },
  ilustrasiWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  listContainer: {
    paddingHorizontal: ms(20)
  }
})