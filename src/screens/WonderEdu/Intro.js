import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

// icons 
import IC_Next from '../../assets/icons/next.png'

// ilustrasi 
import IL_Intro from '../../assets/ilustrasi/smartEdu.png'

export default function IntroEdu({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={IL_Intro} style={styles.ilustrasi} />
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.anytime}>
            Learn Anytime,
          </Text>
          <Text style={styles.anywhere}>
            Anywhere. Accelerate
            <Text style={styles.span}>
              Your Future and beyond.
            </Text>
            <View style={styles.spanCustom}>
            </View>
          </Text>
        </View>
        <View style={styles.start}>
          <Text style={styles.startText}>
            Start Learning!
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Edu')}>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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