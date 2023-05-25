import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'


export default function Course({ title, image }) {
  return (
    <TouchableOpacity style={styles.courseWrapper}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.imageCourse} />
      </View>
      <View style={styles.descWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  courseWrapper: {
    padding: ms(14),
    borderRadius: ms(12),
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginBottom: ms(12)
  },
  imageWrapper: {
    width: ms(80),
    height: ms(80),
    backgroundColor: 'grey',
    borderRadius: ms(10)
  },
  imageCourse: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: ms(10)
  },
  descWrapper: {
    marginLeft: ms(12),
    flex: 1,
    justifyContent: 'center'
  },
  category: {
    backgroundColor: '#EEE',
    padding: ms(3),
    width: ms(75),
    alignItems: 'center',
    borderRadius: ms(7),
    marginBottom: ms(4)
  },
  title: {
    fontSize: ms(18),
    fontWeight: '700',
    color: 'black',
    marginBottom: ms(4)
  },
  subTitle: {

  }
})