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

//Wondsea icons
import IC_Youtube from '../../assets/wondsea/icons/youtube.png'
import IC_Fishes from '../../assets/wondsea/icons/fishes.png'
import IC_Shrimp from '../../assets/wondsea/icons/shrimp.png'


//images
import IL_Chili from '../../assets/ilustrasi/chili.jpg'
import IL_Pot from '../../assets/ilustrasi/ilustrasi2.jpg'
import Sample from '../../assets/ilustrasi/farm.jpg'
import Smoothies from '../../assets/ilustrasi/promo1.png'
import Fruit from '../../assets/ilustrasi/promo2.png'

//Wondsea images
import Beach from '../../assets/wondsea/ilustrasi/beach.jpg'
import Promo1 from '../../assets/wondsea/ilustrasi/promo1.png'
import Promo2 from '../../assets/wondsea/ilustrasi/promo2.png'
import Blog1 from '../../assets/wondsea/ilustrasi/blog1.jpg'




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
                    <Image source={Beach} style={styles.headerImage} />
                </View>
                <View style={styles.containerMenu}>
                    <Menu source={IC_Youtube} title={"Wonder Edu"} onPress={() => Navigation.navigate('WonderEdu')} />
                    <Menu source={IC_Fishes} title={"Wonder Food"} onPress={() => Navigation.navigate('WonderFood')} />
                    <Menu source={IC_Shrimp} title={"MyTambak"} onPress={() => Navigation.navigate('SmartTech')} />
                </View>
                {/* <View style={styles.containerMenu}>
                    <Menu source={IC_Video} title={"Smart Edu"} onPress={() => Navigation.navigate('IntroEdu')} />
                    <Menu source={IC_Plant} title={"Smart Plant"} onPress={() => Navigation.navigate('SmartPlant')} />
                    <Menu source={IC_Tool} title={"Smart Kit"} onPress={() => Navigation.navigate('SmartKit')} />
                    <Menu source={IC_Maps} title={"Smart Maps"} onPress={() => Navigation.navigate('SmartMaps')} />
                </View> */}
                {/* <View style={styles.containerMenu}>
                    <Menu source={IC_Clean} title={"Smart Clean"} onPress={() => Navigation.navigate('SmartClean')} />
                    <Menu source={IC_Drink} title={"Smart Food"} onPress={() => Navigation.navigate('SmartFood')} />
                    <Menu source={IC_Tech} title={"Smart Tech"} onPress={() => Navigation.navigate('SmartTech')} />
                    <Menu source={IC_Event} title={"Smart Event"} onPress={() => Navigation.navigate('SmartEvent')} />
                </View> */}
                <View style={styles.promoContainer}>
                    <Title name={"Belanja makin hemat 🤑"} subtitle={"Diskon untuk kamu yang suka seafood!"} />
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Promo source={Promo1} />
                    <Promo source={Promo2} />
                </ScrollView>
                <View style={styles.mycourseContainer}>
                    <Title name={"Belajar makin mudah"} subtitle={"Dapetin ilmu tentang perikanan dan kelautan sekarang juga!"} />
                    <Course image={Blog1} title={"Ide bisnis olahan ikan tambak, lengkap dengan resepnya"} />
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
        paddingTop: ms(20),
        color: '#000'
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
        marginTop: ms(36)
    },
    promoContainer: {
        paddingHorizontal: ms(14),
        marginTop: ms(24),
        marginBottom: ms(-12)
    }
})