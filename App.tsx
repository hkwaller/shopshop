import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Lists from 'app/screens/lists/Lists'
import Settings from 'app/screens/settings/Settings'
import ListIcon from 'app/icons/ListIcon'
import { colors } from 'app/utils'
import GroceriesIcon from 'app/icons/GroceriesIcon'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Lists') {
              return (
                <GroceriesIcon
                  color={focused ? colors.blue : colors.black}
                  size={size}
                />
              )
            } else {
              return (
                <ListIcon
                  color={focused ? colors.blue : colors.black}
                  size={size}
                />
              )
            }
          },
        })}
        tabBarOptions={{
          showLabel: false,
          style: {
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen name="Lists" component={Lists} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
