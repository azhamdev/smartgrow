import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ms } from 'react-native-size-matters'
import Product from '../../components/Product/Product'

import IL_Plant from '../../assets/ilustrasi/smartPlant.png'
import IL_BibitTomat from '../../assets/ilustrasi/bibitTomay.png'
import IL_Ciplukan from '../../assets/ilustrasi/ciplukan.jpg'
import Title from '../../components/title/title'
import Header from '../../components/Header/Header'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'


export default function SmartPlant() {
  const [products, setProducts] = useState([])
  const Navigation = useNavigation();

  useEffect(() => {
    getProducts();
  }, [])


  const getProducts = async () => {
    const res = await axios.get("https://azhamrasyid.com/smartgrow/api/smartplant")
    setProducts(res.data.data)
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
    <ScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <Navbar text={"Smart Plant"} />
      <View style={styles.contentWrapper}>
        <Header headline={"Dapatkan bibit tanaman terbaik!"} source={IL_Plant} bgcolor={'#CFF0FF'} />
        <View style={styles.promoContainer}>
          <Title name={"Tanaman baik berasal dari bibit yang baik 😊"} subtitle={"Dapetin bibit tanaman pertanian berkualitas sekarang!"} />
        </View>
        <View style={styles.productContainer}>
          {products.map((product) => (
            <View key={product.id}>
              <Product
                mitra={product.mitra}
                source={{ uri: `${product.image}` }}
                price={product.price}
                name={product.title}
                onPress={() => Navigation.navigate('Detail', {
                  mitra: `${product.mitra}`,
                  source: `${product.image}`,
                  price: `${product.price}`,
                  name: `${product.title}`,
                  contact: `${product.contact}`,
                  desc: `${product.description}`
                })} />
            </View>
          ))}
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