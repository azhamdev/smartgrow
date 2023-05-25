import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ms } from 'react-native-size-matters'
import Product from '../../components/Product/Product'
import Title from '../../components/title/title'

import IL_Melon from '../../assets/ilustrasi/melon.png'
import IL_Siram from '../../assets/ilustrasi/siram.png'

import IL_Kerupuk from '../../assets/wondsea/ilustrasi/kerupuk-ikan.jpeg'

import Promo from '../../components/promo/promo'
import Promo1 from '../../assets/wondsea/ilustrasi/promo1.png'
import Promo2 from '../../assets/wondsea/ilustrasi/promo2.png'


export default function WonderFood() {
    const sendMessage = () => {
        let url =
            'whatsapp://send?text=saya mau pesan' + '&phone=62' + 895379181484;

        Linking.openURL(url)
            .then((data) => {
                console.log('WhatsApp Opened');
            })
            .catch(() => {
                alert('Make sure Whatsapp installed on your device');
            });
    }
    return (

        <View>
            <Navbar source={IL_Siram} text={"Wonder Food"} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: ms(15) }}>
                <Promo source={Promo1} />
                <Promo source={Promo2} />
            </ScrollView>
            <View style={styles.promoContainer}>
                <Title name={"Hasil olahan perikanan siap santap 😋"} subtitle={"Dapetin makanan sehat segar langsung dari perikanan berkualitas!"} />
            </View>
            <View style={styles.contentWrapper}>
                <View style={styles.productContainer}>
                    <Product source={IL_Kerupuk} price={40000} name={"Kerupuk Ikan"} onPress={sendMessage} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentWrapper: {
        paddingHorizontal: ms(12),
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    promoContainer: {
        paddingHorizontal: ms(14),
        marginTop: ms(24),
        marginBottom: ms(-12)
    }
})