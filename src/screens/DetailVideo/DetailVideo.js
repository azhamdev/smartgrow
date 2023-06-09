import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { ms } from 'react-native-size-matters';
import YoutubePlayer from "react-native-youtube-iframe";
import IL_Wortel from '../../assets/ilustrasi/tanamWortel.png'
import IL_Tomat from '../../assets/ilustrasi/tomat.png'
import ListVideo from '../../components/ListVideo/ListVideo';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../components/Navbar/Navbar';


export default function DetailVideo({ route }) {
  const Navigation = useNavigation();
  const { title, videoId } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <Navbar text={title} />
      <View style={styles.container}>
        <YoutubePlayer
          height={300}
          // play={playing}
          videoId={`${videoId}`}
        // onChangeState={onStateChange}
        />
        <Text style={styles.title}>
          {title}
        </Text>
        <ListVideo source={IL_Wortel} title={"Cara mudah menanam wortel di polybag"} onPress={() => Navigation.navigate('DetailVideo', {
          title: "Cara mudah menanam wortel di polybag",
          videoId: "djS8_k5jez0"
        })} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: ms(20),
    color: '#000',
    marginTop: ms(-80),
    marginBottom: ms(40),
    fontWeight: 'bold'
  },
  container: {
    paddingHorizontal: ms(14)
  }
})