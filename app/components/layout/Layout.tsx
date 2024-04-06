import React, { FC, ReactNode } from 'react'
import { View, ScrollView } from 'react-native'

interface ILayout {
  isScrollView?: boolean
  children: ReactNode
}


const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
  return (
    <View className="h-full w-full bg-white pt-16">
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  )
}

export default Layout
