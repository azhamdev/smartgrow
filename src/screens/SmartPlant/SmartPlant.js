import {
  StyleSheet,
  Text, View, Image, TouchableOpacity, Linking, ScrollView, ActivityIndicator, RefreshControl
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { ms } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

import Product from '../../components/Product/Product'
import Navbar from '../../components/Navbar/Navbar'
import Title from '../../components/title/title'
import Header from '../../components/Header/Header'

import IL_Plant from '../../assets/ilustrasi/smartPlant.png'


export default function SmartPlant() {
  const [products, setProducts] = useState([])
  const Navigation = useNavigation();
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getProducts();
  }, [])


  const getProducts = async () => {
    const res = await axios.get("https://azhamrasyid.com/smartgrow/api/smartplant")
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
        progressBackgroundColor={'#FFF'}
      />}
      style={{
        flex: 1,
        backgroundColor: '#FFF'
      }}

    >
      <Navbar text={"Smart Plant"} />
      <View style={styles.contentWrapper}>
        <Header
          headline={"Dapatkan bibit tanaman terbaik!"}
          source={IL_Plant}
          bgcolor={'#CFF0FF'}
        />
        <View style={styles.promoContainer}>
          <Title
            name={"Tanaman baik berasal dari bibit yang baik 😊"}
            subtitle={"Dapetin bibit tanaman pertanian berkualitas sekarang!"}
          />
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