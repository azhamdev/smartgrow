import React from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ms } from 'react-native-size-matters'
import IL_SmartClean from '../../assets/ilustrasi/smartClean2.png'

export default function SmartClean() {
  const sendMessage = () => {
    let url =
      'whatsapp://send?text=saya mau membersihkan kebun saya' + '&phone=62' + 89677201587;

    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  }
  return (
    <View style={styles.container}>
      <Image source={IL_SmartClean} style={styles.IL_SmartClean} />
      <Text style={
        {
          fontSize: ms(23),
          fontWeight: '700',
          color: '#000'
        }
      }>
        Smart Clean!
      </Text>
      <Text>
        Siap membantu membersihkan dan merawat kebun
        Anda !
      </Text>
      <TouchableOpacity onPress={sendMessage} style={styles.buttonClean}>
        <Text style={styles.textButton}>
          Hubungi sekarang!
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: ms(42),
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  IL_SmartClean: {
    width: '100%',
    height: '70%'
  },
  textButton: {
    fontSize: ms(20),
    color: '#FFF',
  },
  buttonClean: {
    backgroundColor: '#609966',
    paddingHorizontal: ms(60),
    paddingVertical: ms(11),
    borderRadius: ms(10)
  }
})