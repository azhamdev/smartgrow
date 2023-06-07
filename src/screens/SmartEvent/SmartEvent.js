import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ms } from 'react-native-size-matters'

import IL_Event from '../../assets/ilustrasi/smartevent.png'
import Title from '../../components/title/title'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'


export default function SmartEvent() {
  const [products, setProducts] = useState([])
  const Navigation = useNavigation();
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await axios.get("https://azhamrasyid.com/smartgrow/api/smartevent");
    setProducts(response.data.data)
    setIsLoaded(true)
  }

  // refresh control
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getProducts().then(() => setRefreshing(false));
  }, [])

  return (
    <ScrollView refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        size={'large'}
        progressBackgroundColor={'#FFF'}
        tintColor={'#FFF'}
      />} style={{ flex: 1 }}>
      <Navbar text={"Smart Event"} />
      <View style={styles.contentWrapper}>
        <View style={styles.promoContainer}>
          <Title name={"Gabung ke komunitas buat ningkatin skill kamu !"} subtitle={"Daftarkan sekarang juga !"} />
        </View>
        <View style={styles.productContainer}>
          {
            isLoaded ? (
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
                        <TouchableOpacity
                          onPress={() => Navigation.navigate('Detail', {
                            mitra: `${product.mitra}`,
                            source: `${product.image}`,
                            price: `${product.price}`,
                            name: `${product.title}`,
                            contact: `${product.contact}`,
                            desc: `${product.description}`
                          })}
                        >
                          <Text style={styles.linkEvent}>
                            Lihat Detail
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              ))
            ) : (
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size={'large'} color={"#609966"} />
              </View>
            )
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
    fontSize: ms(18),
    color: "#000",
    fontWeight: '700',
    marginHorizontal: ms(12)
  },
  linkEvent: {
    fontSize: ms(14),
    color: '#609966',
    marginHorizontal: ms(12)
  }
})