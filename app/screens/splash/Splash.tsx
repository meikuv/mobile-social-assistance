import React, { useEffect, useRef } from 'react'
import { Animated, Image, StyleSheet } from 'react-native'

const Splash = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {})
  }, [fadeAnim])

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image
        source={require('../../../assets/splash-1.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default Splash
