import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ms } from 'react-native-size-matters'
import Product from '../../components/Product/Product'

import IL_Siram from '../../assets/ilustrasi/siram.png'
import IL_Penyiram from '../../assets/ilustrasi/penyiram.png'
import IL_Penyemprot from '../../assets/ilustrasi/penyemprotHama.png'


export default function SmartKit() {
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
      <Navbar source={IL_Siram} text={"Dapatkan alat untuk kebunmu"} />
      <View style={styles.contentWrapper}>
        <View style={styles.productContainer}>
          <Product source={IL_Penyiram} price={67000} name={"Penyiram Tanaman Rumah"} onPress={sendMessage} />
          <Product source={IL_Penyemprot} price={267000} name={"Penyemprot Hama 1.6lt"} onPress={sendMessage} />
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