import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
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
import { useNavigation } from '@react-navigation/native'


export default function SmartTech() {
  const [products, setProducts] = useState([])
  const Navigation = useNavigation()
  const [isLoaded, setIsLoaded] = useState(false)


  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const res = await axios.get("https://azhamrasyid.com/smartgrow/api/smarttech")
    setProducts(res.data.data)
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
      />}
      style={{ flex: 1, backgroundColor: '#FFF' }}>
      <Navbar text={"Smart Tech"} />
      <View style={styles.contentWrapper}>
        <Header headline={"Jadikan kebunmu menjadi lebih canggih"} source={IL_SmartTech} bgcolor={'#FBD6B3'} />
        <View style={styles.promoContainer}>
          <Title name={"Keren gak sih kalau kebunmu pake IoT ?😱"} subtitle={"Dapetin perangkat IoT untuk dipakai kebunmu sekarang!"} />
        </View>
        <View style={styles.productContainer}>
          {
            isLoaded ?
              (
                products.map((product) => (
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
    justifyContent: 'space-between',
    marginTop: ms(14),
    flexWrap: 'wrap'
  },
  promoContainer: {
    paddingHorizontal: ms(14),
    marginTop: ms(12),
    marginBottom: ms(-12)
  }
})