import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { ms } from 'react-native-size-matters'

// ilustrasi
import IL_Farm from '../../assets/ilustrasi/farmHouse.png'
import IL_Praktik from '../../assets/wondsea/ilustrasi/praktik.png'
import IL_Teori from '../../assets/wondsea/ilustrasi/teori.png'
import IL_Wortel from '../../assets/ilustrasi/tanamWortel.png'
import IL_Fishing from '../../assets/wondsea/ilustrasi/fishing.png'

// components
import ListVideo from '../../components/ListVideo/ListVideo'
import Navbar from '../../components/Navbar/Navbar'

export default function Edu() {
    const Navigation = useNavigation()
    return (
        <View>
            <Navbar source={IL_Farm} text={"Wonder Edu"} />
            <View style={styles.categories}>
                <TouchableOpacity>
                    <Image source={IL_Praktik} style={styles.category} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={IL_Teori} style={styles.category} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <ListVideo source={IL_Fishing} title={"Cara budidaya ikan lele 40 hari panen dengan media terpal. Mudah untuk pemula! "} onPress={() => Navigation.navigate('DetailVideo', {
                    title: "Cara budidaya ikan lele 40 hari panen dengan media terpal. Mudah untuk pemula!",
                    videoId: "31tKSF_LaQs"
                })} />
            </View>
        </View>
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
        paddingHorizontal: ms(20)
    },
    category: {
        height: ms(120),
        width: ms(164),
        resizeMode: 'contain'
    }
})