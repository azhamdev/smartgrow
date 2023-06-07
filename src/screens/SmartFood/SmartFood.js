import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ms } from 'react-native-size-matters'
import Product from '../../components/Product/Product'

import IL_Melon from '../../assets/ilustrasi/melon.png'
import IL_Siram from '../../assets/ilustrasi/siram.png'
import Promo from '../../components/promo/promo'

import Smoothies from '../../assets/ilustrasi/promo1.png'
import Fruit from '../../assets/ilustrasi/promo2.png'
import Title from '../../components/title/title'
import axios from 'axios'



export default function SmartFood() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await axios.get("https://azhamrasyid.com/smartgrow/api/smartfood")
    setProducts(response.data.data)
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
    <ScrollView>
      <Navbar source={IL_Siram} text={"Smart Food"} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Promo source={Smoothies} />
        <Promo source={Fruit} />
      </ScrollView>
      <View style={styles.contentWrapper}>
        <View style={styles.promoContainer}>
          <Title name={"Makanan hasil pertanian siap santap 😋"} subtitle={"Dapetin makanan sehat segar langsung dari pertanian berkualitas!"} />
        </View>
        <View style={styles.productContainer}>
          {
            products.map((product) => (
              <View>
                <Product source={{ uri: `${product.image}` }} mitra={product.mitra} name={product.title} price={product.price} />
              </View>
            ))
          }
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
    flexWrap: 'wrap'
  },
  promoContainer: {
    paddingHorizontal: ms(14),
    marginTop: ms(12),
    marginBottom: ms(14)
  }
})