import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

export default function Product({ source, price, name, onPress, mitra }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.productContainer}>
      <View style={styles.imageWrapper}>
        <Image source={source} style={styles.imageProduct} />
      </View>
      <View style={styles.textWrapper}>
        <View>
          <Text style={styles.mitra}>
            {mitra}
          </Text>
          <Text style={styles.nameProduct}>
            {name}
          </Text>
        </View>
        <View>
          <Text style={styles.priceProduct}>
            Rp {price}
          </Text>
        </View>
      </View>
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  imageWrapper: {
    width: ms(169),
    height: ms(127),
    borderRadius: ms(8),
  },
  imageProduct: {
    width: ms(170),
    height: ms(127),
    resizeMode: 'cover',
    borderTopLeftRadius: ms(8),
    borderTopRightRadius: ms(8),
  },
  nameProduct: {
    fontSize: ms(12),
    fontWeight: '700',
    color: '#000'
  },
  productContainer: {
    width: ms(172),
    height: ms(214),
    borderRadius: ms(8),
    borderWidth: ms(1),
    borderColor: '#D9D9D9',
    marginBottom: ms(12),
  },
  textWrapper: {
    padding: ms(10),
    height: ms(87),
    width: ms(169),
    justifyContent: 'space-between'
  },
  mitra: {
    fontSize: ms(8),
    color: '#838383'
  },
  priceProduct: {
    color: '#609966',
    fontSize: ms(14),
    fontWeight: '800'
  }
})