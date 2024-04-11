import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../../screens/home/Home'
import Search from '../../screens/search/Search'
import ProfileStack from '../profile/ProfileStack'
import { useTranslation } from 'react-i18next'

const Tab = createBottomTabNavigator()

const PrivateStack = () => {
  const { t } = useTranslation()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: t('home.title'),
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: t('search.title'),
          tabBarIcon: ({ color }) => <Ionicons name="search" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Support"
        component={Search}
        options={{
          tabBarLabel: t('support.title'),
          tabBarIcon: ({ color }) => <MaterialIcons name="support-agent" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: t('profile.title'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default PrivateStack
