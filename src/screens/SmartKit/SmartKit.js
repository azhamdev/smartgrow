import React, { useEffect, useState } from 'react'
import { ActivityIndicator, RefreshControl, ScrollView, StyleSheet, View } from 'react-native'
import { ms } from 'react-native-size-matters'
import Navbar from '../../components/Navbar/Navbar'
import Product from '../../components/Product/Product'

import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import IL_Kit from '../../assets/ilustrasi/smartKit.png'
import Header from '../../components/Header/Header'
import Title from '../../components/title/title'


export default function SmartKit() {
  const [products, setProducts] = useState([])
  const Navigation = useNavigation();
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await axios.get("https://azhamrasyid.com/smartgrow/api/smartkit")
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
        progressBackgroundColor={'#FFF'}
      />}
      style={{ flex: 1, backgroundColor: '#FFF' }}>
      <Navbar text={"Smart Kit"} />
      <View style={styles.contentWrapper}>
        <Header headline={"Dapatkan peralatan kebun terbaik!"} bgcolor={'#FFEBAB'} source={IL_Kit} />
        <View style={styles.promoContainer}>
          <Title name={"Kebun yang baik diolah dari alat yang baik 😎"} subtitle={"Dapetin alat-alat pertanian berkualitas sekarang!"} />
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