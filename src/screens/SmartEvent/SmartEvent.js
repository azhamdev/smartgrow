import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ms } from 'react-native-size-matters'

import IL_Event from '../../assets/ilustrasi/smartevent.png'
import Title from '../../components/title/title'
import axios from 'axios'


export default function SmartEvent() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await axios.get("https://azhamrasyid.com/smartgrow/api/smartevent");
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
    <ScrollView style={{ flex: 1 }}>
      <Navbar text={"Smart Event"} />
      <View style={styles.contentWrapper}>
        <View style={styles.promoContainer}>
          <Title name={"Gabung ke komunitas buat ningkatin skill kamu !"} subtitle={"Daftarkan sekarang juga !"} />
        </View>
        <View style={styles.productContainer}>
          {
            products.map((product) => (
              <View key={product.id}>
                <View style={styles.productWrapper}>
                  <View >
                    <Image source={{ uri: `${product.image}` }} style={styles.imageWrapper} />
                  </View>
                  <View style={
                    {
                      flex: 1,
                      justifyContent: 'space-between',
                      paddingVertical: ms(10)
                    }
                  }>
                    <View >
                      <Text style={styles.eventTitle}>
                        {product.title}
                      </Text>
                    </View>
                    <View style={{
                      alignItems: 'flex-end'
                    }}>
                      <TouchableOpacity>
                        <Text style={styles.linkEvent}>
                          Lihat Detail
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))
          }
          <View style={styles.productWrapper}>
            <View >
              <Image source={IL_Event} style={styles.imageWrapper} />
            </View>
            <View style={
              {
                flex: 1,
                justifyContent: 'space-between',
                paddingVertical: ms(10)
              }
            }>
              <View >
                <Text style={styles.eventTitle}>
                  Pelatihan Holticultura Tanaman Tahunan
                </Text>
              </View>
              <View style={{
                alignItems: 'flex-end'
              }}>
                <TouchableOpacity>
                  <Text style={styles.linkEvent}>
                    Lihat Detail
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
  },
  productWrapper: {
    height: ms(220),
    width: ms(353),
    backgroundColor: '#fff',
    borderRadius: ms(12),
    marginBottom: ms(10)
  },
  imageWrapper: {
    width: ms(353),
    height: ms(143),
    borderTopRightRadius: ms(12),
    borderTopLeftRadius: ms(12),
  },
  eventTitle: {
    fontSize: ms(14),
    color: "#000",
    fontWeight: '700',
    marginHorizontal: ms(12)
  },
  linkEvent: {
    fontSize: ms(10),
    color: '#609966',
    marginHorizontal: ms(12)
  }
})