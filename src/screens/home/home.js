import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

//Icons
import IC_Video from '../../assets/icons/cinema.png'
import IC_Plant from '../../assets/icons/plant.png'
import IC_Tool from '../../assets/icons/tool.png'
import IC_Maps from '../../assets/icons/maps.png'
import IC_Clean from '../../assets/icons/repair.png'
import IC_Drink from '../../assets/icons/drink.png'
import IC_Tech from '../../assets/icons/iot.png'
import IC_Event from '../../assets/icons/event.png'


//images
import IL_Chili from '../../assets/ilustrasi/chili.jpg'
import Sample from '../../assets/ilustrasi/farm.jpg'
import Smoothies from '../../assets/ilustrasi/promo1.png'
import Fruit from '../../assets/ilustrasi/promo2.png'

//components
import Course from '../../components/courses/course'
import Title from '../../components/title/title'
import Menu from '../../components/menu/menu'
import Promo from '../../components/promo/promo'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.welcome}>
            Selamat Datang
          </Text>
          <Text style={styles.name}>
            Semoga harimu cerah!
          </Text>
        </View>
        <View style={styles.header}>
          <Image source={Sample} style={styles.headerImage} />
        </View>
        <View style={styles.containerMenu}>
          <Menu source={IC_Video} title={"Smart Edu"} onPress={() => Navigation.navigate('Edu')} />
          <Menu source={IC_Plant} title={"Smart Plant"} />
          <Menu source={IC_Tool} title={"Smart Kit"} />
          <Menu source={IC_Maps} title={"Smart Maps"} onPress={() => Navigation.navigate('SmartMaps')} />
        </View>
        <View style={styles.containerMenu}>
          <Menu source={IC_Clean} title={"Smart Clean"} />
          <Menu source={IC_Drink} title={"Smart Food"} />
          <Menu source={IC_Tech} title={"Smart Tech"} />
          <Menu source={IC_Event} title={"Smart Event"} />
        </View>
        <View style={styles.promoContainer}>
          <Title name={"Belanja makin hemat 🤑"} subtitle={"Dapetin diskon dan harga spesialnya sekarang sebelum kehabisan!"} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Promo source={Smoothies} />
          <Promo source={Fruit} />
        </ScrollView>
        <View style={styles.mycourseContainer}>
          <Title name={"Belajar makin mudah"} subtitle={"Dapetin ilmu tentang pertanian sekarang sebelum terlambat!"} />
          <Course image={IL_Chili} title={"Cara menanam cabai bagi pemula"} subtitle={"Begini cara menanam cabai supaya hasil maksimal"} category={"Vegetables"} />
          <Course image={IL_Chili} title={"Cara menanam cabai bagi pemula"} subtitle={"Begini cara menanam cabai supaya hasil maksimal"} category={"Vegetables"} />
          <Course image={IL_Chili} title={"Cara menanam cabai bagi pemula"} subtitle={"Begini cara menanam cabai supaya hasil maksimal"} category={"Vegetables"} />
          <Course image={IL_Chili} title={"Cara menanam cabai bagi pemula"} subtitle={"Begini cara menanam cabai supaya hasil maksimal"} category={"Vegetables"} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: ms(14),
  },
  header: {
    paddingHorizontal: ms(14),
    height: ms(100),
    borderRadius: ms(16),
    marginBottom: ms(24),
  },
  welcome: {
    paddingHorizontal: ms(14),
    fontSize: ms(12),
    paddingTop: ms(20)
  },
  name: {
    paddingHorizontal: ms(14),
    fontSize: ms(20),
    color: '#000',
    marginTop: ms(4),
    marginBottom: ms(8)
  },
  containerMenu: {
    paddingHorizontal: ms(14),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: ms(12)
  },
  headerImage: {
    paddingHorizontal: ms(14),
    height: ms(100),
    width: '100%',
    // aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: ms(16)
  },
  mycourseContainer: {
    paddingHorizontal: ms(14),
    marginTop: ms(12)
  },
  promoContainer: {
    paddingHorizontal: ms(14),
    marginTop: ms(12),
    marginBottom: ms(-12)
  }
})