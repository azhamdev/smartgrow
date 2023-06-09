import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ms } from 'react-native-size-matters'
import Navbar from '../../components/Navbar/Navbar'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Detail({ route }) {
  const navigation = useNavigation()
  const { mitra, source, name, contact, desc, price } = route.params

  const sendMessage = () => {
    let url =
      `whatsapp://send?text= Halo Saya mau pesan ${name} dengan harga ${price}` + '&phone=62' + `${contact}`;

    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert(`Make sure Whatsapp installed on your device`);
      });
  }
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <Navbar text={`Detail`} />
      <View style={styles.contentWrapper}>
        <Image
          source={{ uri: `${source}` }}
          style={styles.thumbnail}
        />
        <View style={
          {
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: windowHeight / 2
          }}>
          <View>
            <Text style={styles.mitra}>{mitra}</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>Rp {price}</Text>
            <Text style={styles.desc}>{desc}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.buttonOrder} onPress={sendMessage}>
              <Text style={styles.textButton}>
                Pesan Sekarang
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  thumbnail: {
    height: ms(245),
    width: windowWidth - ms(24),
    borderRadius: ms(6)
  },
  contentWrapper: {
    width: windowWidth,
    paddingHorizontal: ms(12)
  },
  mitra: {
    fontSize: ms(14),
    color: '#838383',
    fontWeight: '600',
    marginTop: ms(11)
  },
  name: {
    fontSize: ms(24),
    color: '#000',
    fontWeight: '700',
    marginBottom: ms(8)
  },
  price: {
    fontSize: ms(22),
    color: '#609966',
    fontWeight: '700',
    marginBottom: ms(15)
  },
  desc: {
    fontSize: ms(14),
    color: '#000',
    borderTopWidth: ms(1),
    paddingTop: ms(13)
  },
  buttonOrder: {
    backgroundColor: '#609966',
    height: ms(56),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ms(12),
  },
  textButton: {
    color: '#FFF',
    fontSize: ms(23),
  }
})