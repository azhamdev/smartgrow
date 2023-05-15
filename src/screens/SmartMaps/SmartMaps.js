import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'

export default function SmartMaps() {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude: -6.878581208024285,
          longitude: 109.18699848366853,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})