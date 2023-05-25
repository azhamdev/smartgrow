import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ms } from 'react-native-size-matters'

import IC_Back from '../../assets/icons/leftArrow.png'


export default function Navbar({ text }) {
    const Navigation = useNavigation()
    return (
        <View style={styles.navbarBg}>
            <TouchableOpacity onPress={() => Navigation.goBack()}>
                <Image source={IC_Back} style={styles.arrowBack} />
            </TouchableOpacity>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbarBg: {
        paddingHorizontal: ms(20),
        paddingTop: ms(27),
        marginBottom: ms(14),
        flexDirection: 'row',
        alignItems: 'center'
    },
    arrowBack: {
        width: ms(27),
        height: ms(27)
    },
    text: {
        fontSize: ms(20),
        color: '#000',
        maxWidth: ms(160),
        fontWeight: '700',
        marginLeft: ms(16)
    }
})