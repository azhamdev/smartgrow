import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
import { ms } from 'react-native-size-matters'

// ilustrasi
import IL_Farm from '../../assets/ilustrasi/farmHouse.png'
import IL_Praktik from '../../assets/ilustrasi/praktik.png'
import IL_Teori from '../../assets/ilustrasi/teori.png'

// components
import ListVideo from '../../components/ListVideo/ListVideo'
import Navbar from '../../components/Navbar/Navbar'

const windowWidth = Dimensions.get('window').width;

export default function Edu() {
  const [Courses, setCourses] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const Navigation = useNavigation()

  useEffect(() => {
    getCourses();
  }, [])


  const getCourses = async () => {
    const response = await axios.get("https://azhamrasyid.com/smartgrow/api/smartedu")
    setCourses(response.data.data)
    setIsLoaded(true)
  }

  // refresh control
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getCourses().then(() => setRefreshing(false));
  }, [])


  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFF' }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor={'#FFF'}
        />
      }
    >
      <Navbar source={IL_Farm} text={"Smart Edu"} />
      <View style={styles.categories}>
        <TouchableOpacity onPress={() => Navigation.navigate('PraktikEdu')}>
          <Image source={IL_Praktik} style={styles.category} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.navigate('TeoriEdu')}>
          <Image source={IL_Teori} style={styles.category} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {
          isLoaded ? (
            <View>
              {
                Courses.map((course) => (
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
                ))}
            </View>
          ) : (
            <View>
              <ActivityIndicator size={'large'} color={"#609966"} />
            </View>
          )
        }

      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ms(20),
    marginTop: ms(24)
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth,
    paddingHorizontal: ms(12),
  },
  category: {
    height: ms(120),
    width: windowWidth / 2.2,
    resizeMode: 'contain',
  }
})