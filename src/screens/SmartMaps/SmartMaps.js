import axios from 'axios'
import Lottie from 'lottie-react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'
import { ms } from 'react-native-size-matters'
import IC_Marker from '../../assets/icons/marker.png'

import Loading from '../../assets/Lotties/forMaps.json'

export default function SmartMaps() {
  const [locations, setLocations] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getLocations();
  }, [])

  const getLocations = async () => {
    const response = await axios.get('https://azhamrasyid.com/smartgrow/api/smartmap')
    setLocations(response.data.data)
    setIsLoaded(true)
  }

  return (
    <View style={{ flex: 1 }}>
      {
        isLoaded ? (
          <MapView
            style={{ width: '100%', height: '100%' }}
            initialRegion={{
              latitude: -6.995850241158358,
              longitude: 109.12103458650712,
              latitudeDelta: 0.015,
              // longitudeDelta: 0.0141,
              longitudeDelta: 0.3,
            }}>
            {
              locations.map((location) => (
                <Marker
                  key={location.id}
                  coordinate={
                    {
                      latitude: parseFloat(location.latitude),
                      longitude: parseFloat(location.longitude),
                    }
                  }
                  image={IC_Marker}
                  style={
                    {
                      width: ms(18),
                      height: ms(18)
                    }}
                  title={location.title}
                  description={location.description}
                >
                  <Callout></Callout>

                </Marker>
              ))
            }
          </MapView>
        ) : (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Lottie source={Loading} autoPlay loop />
          </View>
        )
      }

    </View>
  )
}

const styles = StyleSheet.create({})



// - 6.995850241158358, 109.12103458650712