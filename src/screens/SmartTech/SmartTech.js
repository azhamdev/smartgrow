import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import IL_Oops from '../../assets/ilustrasi/oops.png'
import { ms } from 'react-native-size-matters'

export default function SmartTech() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={IL_Oops} />
      <Text style={{ fontSize: ms(20), color: 'black', marginTop: ms(10) }}>
        Sedang Masa pengembangan
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})