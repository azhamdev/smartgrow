import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, RefreshControl, ScrollView, StyleSheet, View } from 'react-native'

import IL_Promo1 from '../../assets/ilustrasi/promo3.png'
import IL_Promo2 from '../../assets/ilustrasi/promo4.png'
import Navbar from '../../components/Navbar/Navbar'
import Product from '../../components/Product/Product'

import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { ms } from 'react-native-size-matters'

const windowWidth = Dimensions.get('window').width;

export default function Promo() {
  const [products, setProducts] = useState([])
  const Navigation = useNavigation();
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const res = await axios.get("https://azhamrasyid.com/smartgrow/api/smartfood")
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
        tintColor={'#FFF'}
      />} style={{ backgroundColor: '#FFF', flex: 1 }}>
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
            isLoaded ? (
              products.map((product) => (
                <View key={product.id}>
                  <Product
                    mitra={product.mitra}
                    name={product.title}
                    price={product.price}
                    source={{ uri: `${product.image}` }}
                    onPress={() => Navigation.navigate('Detail', {
                      mitra: `${product.mitra}`,
                      source: `${product.image}`,
                      price: `${product.price}`,
                      name: `${product.title}`,
                      contact: `${product.contact}`,
                      desc: `${product.description}`
                    })}
                  />
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
  image: {
    height: ms(138),
    // width: ms(344),
    width: windowWidth - ms(34),
    marginHorizontal: ms(4),
    borderRadius: ms(10)
  },
  contentWrapper: {
    paddingHorizontal: ms(12),
    paddingVertical: ms(20),
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
})