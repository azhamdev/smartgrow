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
import { useNavigation } from '@react-navigation/native'



export default function SmartFood() {
  const [products, setProducts] = useState([])
  const Navigation = useNavigation();

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await axios.get("https://azhamrasyid.com/smartgrow/api/smartfood")
    setProducts(response.data.data)
  }

  const sendMessage = () => {
    let url =
      'whatsapp://send?text=saya mau pesan' + '&phone=62' + `${products.contact}`;

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
              <View key={product.id}>
                <Product
                  onPress={() => Navigation.navigate('Detail', {
                    mitra: `${product.mitra}`,
                    source: `${product.image}`,
                    price: `${product.price}`,
                    name: `${product.title}`,
                    contact: `${product.contact}`,
                    desc: `${product.description}`
                  })}
                  source={{ uri: `${product.image}` }}
                  mitra={product.mitra}
                  name={product.title}
                  price={product.price} />
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