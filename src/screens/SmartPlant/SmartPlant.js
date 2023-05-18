import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ms } from 'react-native-size-matters'
import Product from '../../components/Product/Product'

import IL_Plant from '../../assets/ilustrasi/plant.png'
import IL_BibitTomat from '../../assets/ilustrasi/bibitTomay.png'
import IL_Ciplukan from '../../assets/ilustrasi/ciplukan.jpg'


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
    <View>
      <Navbar source={IL_Plant} text={"Dapatkan bibit unggul dengan mudah"} />
      <View style={styles.contentWrapper}>
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
  }
})