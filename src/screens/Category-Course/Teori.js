import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { ms } from 'react-native-size-matters'
import ListVideo from '../../components/ListVideo/ListVideo'
import Navbar from '../../components/Navbar/Navbar'

// ilustrasi
import IL_Chili from '../../assets/ilustrasi/chili.jpg'
import IL_Teori from '../../assets/ilustrasi/nerd1.png'

export default function Teori() {
  const Navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Navbar text={"Teori"} />
      <View style={styles.ilustrasiWrapper}>
        <Image source={IL_Teori} style={styles.ilustrasi} />
      </View>
      <View style={styles.listContainer}>
        <ListVideo source={IL_Chili} title={"Ciri ciri cabai yang segar"} onPress={() => Navigation.navigate('DetailVideo', {
          title: "Ciri ciri cabai yang segar",
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