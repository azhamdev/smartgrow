import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import IC_Marker from '../../assets/icons/marker.png'
import { ms } from 'react-native-size-matters'

export default function SmartMaps() {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude: -6.995850241158358,
          longitude: 109.12103458650712,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          coordinate={
            {
              latitude: -6.995850241158358,
              longitude: 109.12103458650712,
            }
          }
          image={IC_Marker}
          style={{ width: ms(80), height: ms(80) }}
          title='P4S Satria Tani'
          description='PUSAT PELATIHAN PERTANIAN PEDESAAN SWADAYA'
        >
          <Callout></Callout>
        </Marker>
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({})



// - 6.995850241158358, 109.12103458650712