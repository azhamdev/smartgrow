import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ms } from 'react-native-size-matters'
import Product from '../../components/Product/Product'

import IL_SmartTech from '../../assets/ilustrasi/smartTech.png'
import IL_Monitoring from '../../assets/ilustrasi/mentoring.png'
import IL_PenyiramOtomatis from '../../assets/ilustrasi/penyiramOtomatis.png'
import Title from '../../components/title/title'
import Header from '../../components/Header/Header'
import axios from 'axios'


export default function SmartTech() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const res = await axios.get("https://azhamrasyid.com/smartgrow/api/smarttech")
    setProducts(res.data.data)
  }

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
    <ScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <Navbar text={"Smart Tech"} />
      <View style={styles.contentWrapper}>
        <Header headline={"Jadikan kebunmu menjadi lebih canggih"} source={IL_SmartTech} bgcolor={'#FBD6B3'} />
        <View style={styles.promoContainer}>
          <Title name={"Keren gak sih kalau kebunmu pake IoT ?😱"} subtitle={"Dapetin perangkat IoT untuk dipakai kebunmu sekarang!"} />
        </View>
        <View style={styles.productContainer}>
          {
            products.map((product) => (
              <View key={product.id}>
                <Product mitra={product.mitra} source={{ uri: `${product.image}` }} price={product.price} name={product.title} onPress={sendMessage} />
              </View>
            ))
          }
          <Product mitra={"Sahabat Tani"} source={IL_Monitoring} price={1330000} name={"Monitoring Plant System"} onPress={sendMessage} />
          <Product mitra={"Sahabat Tani"} source={IL_Monitoring} price={1330000} name={"Monitoring Plant System"} onPress={sendMessage} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: ms(12),
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: ms(14),
    flexWrap: 'wrap'
  },
  promoContainer: {
    paddingHorizontal: ms(14),
    marginTop: ms(12),
    marginBottom: ms(-12)
  }
})