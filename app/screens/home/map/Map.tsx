import React from 'react'
import { Dimensions, TouchableWithoutFeedback, View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen')

const Map = () => (
  <MapView
    style={{ flex: 1, width: screenWidth, height: screenHeight }}
    initialRegion={{
      latitude: 48.0196,
      longitude: 66.9237,
      latitudeDelta: 20,
      longitudeDelta: 20,
    }}
  >
    <Marker
      coordinate={{
        latitude: 51.1605,
        longitude: 71.4704,
      }}
      title="Astana"
      description="Capital city of Kazakhstan"
    >
      <TouchableWithoutFeedback onPress={() => alert('Astana Marker Pressed')}>
        <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 5 }}>
          <Text>Astana</Text>
        </View>
      </TouchableWithoutFeedback>
    </Marker>

    <Marker
      coordinate={{
        latitude: 43.222,
        longitude: 76.8512,
      }}
      title="Almaty"
      description="Major city in Kazakhstan"
    >
      <TouchableWithoutFeedback onPress={() => alert('Almaty Marker Pressed')}>
        <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 5 }}>
          <Text>Almaty</Text>
        </View>
      </TouchableWithoutFeedback>
    </Marker>
  </MapView>
)

export default Map
