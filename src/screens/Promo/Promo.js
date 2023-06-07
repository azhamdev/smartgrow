import { StyleSheet, View, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ms } from 'react-native-size-matters'

import IL_Promo1 from '../../assets/ilustrasi/promo3.png'
import IL_Promo2 from '../../assets/ilustrasi/promo4.png'
import axios from 'axios'
import Product from '../../components/Product/Product'
import Navbar from '../../components/Navbar/Navbar'


export default function Promo() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const res = await axios.get("https://azhamrasyid.com/smartgrow/api/smartfood")
    setProducts(res.data.data)
  }

  const sendMessage = () => {
    let url =
      'whatsapp://send?text=Saya mau pesan dari promo' + '&phone=62' + `${products.contact}`;

    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  }

  return (
    <ScrollView style={{ backgroundColor: '#FFF', flex: 1 }}>
      <Navbar text={"Promo"} />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.contentWrapper}>
          <Image source={IL_Promo1} style={styles.image} />
          <Image source={IL_Promo2} style={styles.image} />
        </ScrollView>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.productContainer}>
          {
            products.map((product) => (
              <View key={product.id}>
                <Product mitra={product.mitra} name={product.title} price={product.price} source={{ uri: `${product.image}` }} onPress={sendMessage} />
              </View>
            ))
          }
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    height: ms(138),
    width: ms(344),
    marginHorizontal: ms(4),
    borderRadius: ms(10)
  },
  contentWrapper: {
    paddingHorizontal: ms(12),
    paddingVertical: ms(20),
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
})