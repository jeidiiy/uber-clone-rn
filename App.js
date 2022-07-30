import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import { store } from './store'

// 1) Set up redux

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  )
}
