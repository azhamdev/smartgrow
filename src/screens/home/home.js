import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, RefreshControl, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native'
import { ms } from 'react-native-size-matters'

//Icons
import IC_Video from '../../assets/icons/cinema.png'
import IC_Drink from '../../assets/icons/drink.png'
import IC_Event from '../../assets/icons/event.png'
import IC_Tech from '../../assets/icons/iot.png'
import IC_Maps from '../../assets/icons/maps.png'
import IC_Plant from '../../assets/icons/plant.png'
import IC_Clean from '../../assets/icons/repair.png'
import IC_Tool from '../../assets/icons/tool.png'


//images
import Sample from '../../assets/ilustrasi/farm.jpg'
import Smoothies from '../../assets/ilustrasi/promo1.png'
import Fruit from '../../assets/ilustrasi/promo2.png'

//components
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import ListVideo from '../../components/ListVideo/ListVideo'
import Menu from '../../components/menu/menu'
import Promo from '../../components/promo/promo'
import Title from '../../components/title/title'

export default function Home() {
  const Navigation = useNavigation();
  const [courses, setCourses] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await axios.get("https://azhamrasyid.com/smartgrow/api/smartedu")
    setCourses(response.data.data)
    setIsLoaded(true)
  }

  // refresh control
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getProducts().then(() => setRefreshing(false));
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#FFF"} />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor={'#FFF'}
            tintColor={'#FFF'}
          />}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.welcome}>
            Selamat Datang 😊
          </Text>
          <Text style={styles.name}>
            Semoga harimu cerah!
          </Text>
        </View>
        <View style={styles.header}>
          <Image source={Sample} style={styles.headerImage} />
        </View>
        <View style={styles.containerMenu}>
          <Menu source={IC_Video} title={"Smart Edu"} onPress={() => Navigation.navigate('Course')} />
          <Menu source={IC_Plant} title={"Smart Plant"} onPress={() => Navigation.navigate('SmartPlant')} />
          <Menu source={IC_Tool} title={"Smart Kit"} onPress={() => Navigation.navigate('SmartKit')} />
          <Menu source={IC_Maps} title={"Smart Maps"} onPress={() => Navigation.navigate('SmartMaps')} />
        </View>
        <View style={styles.containerMenu}>
          <Menu source={IC_Clean} title={"Smart Clean"} onPress={() => Navigation.navigate('IntroClean')} />
          <Menu source={IC_Drink} title={"Smart Food"} onPress={() => Navigation.navigate('SmartFood')} />
          <Menu source={IC_Tech} title={"Smart Tech"} onPress={() => Navigation.navigate('SmartTech')} />
          <Menu source={IC_Event} title={"Smart Event"} onPress={() => Navigation.navigate('SmartEvent')} />
        </View>
        <View style={styles.promoContainer}>
          <Title name={"Belanja makin hemat 🤑"} subtitle={"Dapetin diskon dan harga spesialnya sekarang sebelum kehabisan!"} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Promo onPress={() => Navigation.navigate('Promo')} source={Smoothies} />
          <Promo onPress={() => Navigation.navigate('Promo')} source={Fruit} />
        </ScrollView>
        <View style={styles.mycourseContainer}>
          <Title name={"Belajar makin mudah"} subtitle={"Dapetin ilmu tentang pertanian sekarang sebelum terlambat!"} />
          {
            isLoaded ? (
              courses.map((course) => (
                <View key={course.id}>
                  <ListVideo
                    key={course.id}
                    title={course.title}
                    source={{ uri: `${course.image}` }}
                    onPress={() => Navigation.navigate('DetailVideo', {
                      title: `${course.title}`,
                      videoId: `${course.link}`
                    })}
                  />
                </View>
              ))
            ) : (
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size={'large'} color={"#609966"} />
              </View>
            )
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: ms(14),
    marginBottom: ms(70),
  },
  header: {
    paddingHorizontal: ms(14),
    height: ms(100),
    borderRadius: ms(16),
    marginBottom: ms(24),
  },
  welcome: {
    paddingHorizontal: ms(14),
    fontSize: ms(13),
    paddingTop: ms(20),
    color: '#609966',
    fontWeight: '700'
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