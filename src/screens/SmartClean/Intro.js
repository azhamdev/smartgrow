import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

// icons 
import IC_Next from '../../assets/icons/next.png'

// ilustrasi 
import IL_Intro from '../../assets/ilustrasi/smartClean.png'

export default function IntroClean({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={IL_Intro} style={styles.ilustrasi} />
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.anytime}>
            Hai smartfarmer 😍
          </Text>
          <Text style={styles.anywhere}>
            <Text style={styles.span}>
              Lelah bestie ? butuh bantuan bersihin kebun ?
            </Text>
            <View style={styles.spanCustom}>
            </View>
          </Text>
        </View>
        <View style={styles.start}>
          <TouchableOpacity onPress={() => navigation.navigate('SmartClean')}>
            <Image source={IC_Next} style={styles.IC_Next} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  ilustrasi: {
    width: '100%',
    height: '50%'
  },
  anytime: {
    fontSize: ms(18),
    color: "black"
  },
  anywhere: {
    fontSize: ms(24),
    fontWeight: '700',
    color: 'black'
  },
  wrapper: {
    paddingHorizontal: ms(20),
    flex: 1,
    justifyContent: 'space-around'
  },
  start: {
    alignItems: 'flex-end'
  },
  startText: {
    fontSize: ms(24),
    fontWeight: '700',
    color: 'black'
  },
  IC_Next: {
    width: ms(68),
    height: ms(68)
  }
})