import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ms } from 'react-native-size-matters'
import Product from '../../components/Product/Product'

import IL_Plant from '../../assets/ilustrasi/smartPlant.png'
import IL_BibitTomat from '../../assets/ilustrasi/bibitTomay.png'
import IL_Ciplukan from '../../assets/ilustrasi/ciplukan.jpg'
import Title from '../../components/title/title'


export default function SmartPlant() {
  const sendMessage = () => {
    let url =
      'whatsapp://send?text=saya mau pesan' + '&phone=62' + 895379181484;

    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <Navbar text={"Smart Plant"} />
      <View style={styles.contentWrapper}>
        <View style={
          {
            width: ms(353),
            height: ms(138),
            backgroundColor: '#CFF0FF',
            borderRadius: ms(10),
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: ms(16)
          }}>
          <Text style={styles.text}>
            Dapatkan bibit
            tanaman terbaik!
          </Text>
          <Image source={IL_Plant} style={styles.image} />
        </View>
        <View style={styles.promoContainer}>
          <Title name={"Tanaman baik berasal dari bibit yang baik 😊"} subtitle={"Dapetin bibit tanaman pertanian berkualitas sekarang!"} />
        </View>
        <View style={styles.productContainer}>
          <Product source={IL_BibitTomat} price={6000} name={"Bibit Ciplukan"} onPress={sendMessage} />
          <Product source={IL_Ciplukan} price={15000} name={"Bibit Tomat"} onPress={sendMessage} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: ms(12),
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  text: {
    width: ms(160),
    fontSize: ms(18),
    color: '#000',
    fontWeight: '600',
    lineHeight: ms(24)
  },
  image: {
    height: ms(173),
    width: ms(175),
    bottom: ms(15)
  },
  promoContainer: {
    paddingHorizontal: ms(14),
    marginTop: ms(12),
    marginBottom: ms(-12)
  }
})