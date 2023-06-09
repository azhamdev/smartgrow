import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import Lottie from 'lottie-react-native'
import React, { useEffect, useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native'
import { ms } from 'react-native-size-matters'
import Navbar from '../../components/Navbar/Navbar'

import IL_Siram from '../../assets/ilustrasi/siram.png'
import Product from '../../components/Product/Product'
import Promo from '../../components/promo/promo'

import Smoothies from '../../assets/ilustrasi/promo1.png'
import Fruit from '../../assets/ilustrasi/promo2.png'
import Title from '../../components/title/title'

// lottie 
import Loading from '../../assets/Lotties/forFood.json'



export default function SmartFood() {
  const [products, setProducts] = useState([])
  const Navigation = useNavigation();
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await axios.get("https://azhamrasyid.com/smartgrow/api/smartfood")
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
        tintColor={'#FFF'}
      />}>
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
            isLoaded ? (
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
            ) : (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* <ActivityIndicator size={'large'} color={"#609966"} /> */}
                <Lottie source={Loading} autoPlay loop style={{ width: ms(200) }} />
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
    justifyContent: 'space-around',
    marginTop: ms(14),
    flexWrap: 'wrap',
  },
  promoContainer: {
    paddingHorizontal: ms(14),
    marginTop: ms(12),
    marginBottom: ms(14)
  }
})