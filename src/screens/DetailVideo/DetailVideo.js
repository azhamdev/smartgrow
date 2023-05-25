import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { ms } from 'react-native-size-matters';
import YoutubePlayer from "react-native-youtube-iframe";
import IL_Wortel from '../../assets/ilustrasi/tanamWortel.png'
import IL_Fishing from '../../assets/wondsea/ilustrasi/fishing.png'
import IL_Tomat from '../../assets/ilustrasi/tomat.png'
import ListVideo from '../../components/ListVideo/ListVideo';
import { useNavigation } from '@react-navigation/native';


export default function DetailVideo({ route }) {
    const Navigation = useNavigation();
    const { title, videoId } = route.params;

    return (
        <View>
            <YoutubePlayer
                height={300}
                // play={playing}
                videoId={`${videoId}`}
            // onChangeState={onStateChange}
            />
            <View style={styles.container}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <ListVideo source={IL_Fishing} title={"Cara budidaya ikan lele 40 hari panen dengan media terpal. Mudah untuk pemula!"} onPress={() => Navigation.navigate('DetailVideo', {
                    title: "Cara budidaya ikan lele 40 hari panen dengan media terpal. Mudah untuk pemula!",
                    videoId: "31tKSF_LaQs"
                })} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: ms(20),
        color: '#000',
        marginTop: ms(-40),
        marginBottom: ms(40)
    },
    container: {
        paddingHorizontal: ms(14)
    }
})