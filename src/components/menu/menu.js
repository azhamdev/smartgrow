import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

export default function Menu({ source, title, onPress }) {
    return (
        <View>
            <View style={styles.iconsWrapper}>
                <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
                    <Image source={source} style={styles.icon} />
                </TouchableOpacity>
                <Text style={{ marginTop: ms(2), color: 'black' }}>
                    {title}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: ms(24)
    },
    iconContainer: {
        // backgroundColor: '#1F8A70',
        width: ms(52),
        height: ms(52),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: ms(14)
    },
    icon: {
        height: ms(40),
        width: ms(40)
    },
    iconsWrapper: {
        alignItems: 'center'
    },
})