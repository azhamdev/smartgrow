import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

export default function Product({ source, price, name, onPress }) {
  return (
    <View style={styles.productContainer}>
      <View style={styles.imageWrapper}>
        <Image source={source} style={styles.imageProduct} />
      </View>
      <View>
        <View>
          <Text style={styles.nameProduct}>
            {name}
          </Text>
          <Text style={styles.priceProduct}>
            Rp{price}
          </Text>
        </View>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>
            Pesan Sekarang
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageWrapper: {
    width: ms(120),
  },
  imageProduct: {
    width: '100%',
    height: undefined,
    aspectRatio: 1
  },
  nameProduct: {
    fontSize: ms(18),
    fontWeight: '700',
    color: '#000'
  },
  productContainer: {
    alignItems: 'center',
    width: ms(160),
    marginTop: ms(20),
    borderWidth: ms(0.7),
    padding: ms(10),
    borderRadius: ms(12),
    borderColor: '#7F8487',
    backgroundColor: '#FFF'
  },
  button: {
    marginTop: ms(12),
    backgroundColor: '#FFD966',
    paddingHorizontal: ms(20),
    paddingVertical: ms(10),
    borderRadius: ms(12)
  },
  buttonText: {
    color: '#000',
    fontWeight: '600'
  }
})