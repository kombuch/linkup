import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { MD3DarkTheme as DefaultTheme, PaperProvider } from 'react-native-paper'

import CreateAccount from './pages/CreateAccount'
import HomePage from './pages/HomePage'
import HostEventPage from './pages/HostEventPage'
import JoinEventPage from './pages/JoinEventPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

const navStack = []

function App() {
  const [currentPage, setCurrentPage] = useState('login')
  const navigate = (page) => {
    navStack.push(currentPage)
    setCurrentPage(page)
    console.log(navStack)
  }

  const goBack = () => {
    if (navStack.length === 0) {
      // do nothing?
    } else {
      setCurrentPage(navStack.pop())
    }

    console.log(navStack)
  }

  return (
    <PaperProvider theme={theme}>
      <View
        style={{
          ...styles.container,
        }}
      >
        {currentPage === 'login' ? <LoginPage navigate={navigate} goBack={goBack} /> : null}
        {currentPage === 'home' ? <HomePage navigate={navigate} goBack={goBack} /> : null}
        {currentPage === 'host' ? <HostEventPage navigate={navigate} goBack={goBack} /> : null}
        {currentPage === 'join' ? <JoinEventPage navigate={navigate} goBack={goBack} /> : null}
        {currentPage === 'profile' ? <ProfilePage navigate={navigate} goBack={goBack} /> : null}
        {currentPage === 'createaccount' ? (
          <CreateAccount navigate={navigate} goBack={goBack} />
        ) : null}
        <StatusBar />
      </View>
    </PaperProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,

    primary: '#154734',
    secondary: 'white',
    onSecondaryContainer: 'black',
    onTertiaryContainer: '#e87500',
    onErrorContainer: 'black',
    background: 'white',
    surfaceVariant: 'gray',
    surface: '#154734',
    onPrimary: 'white',
    onSecondary: 'black',
    onBackground: 'black',
    onSurfaceVariant: 'black',
    onSurface: 'white',
    outline: 'white',
    outlineVariant: 'white',
    onPrimaryContainer: '#e87500',
    elevation: {
      level0: 'transparent',
      // Note: Color values with transparency cause RN to transfer shadows to children nodes
      // instead of View component in Surface. Providing solid background fixes the issue.
      // Opaque color values generated with `palette.primary80` used as background
      level1: '#e87500', // palette.primary80, alpha 0.05
      level2: '#e87500', // palette.primary80, alpha 0.08
      level3: 'white', // palette.primary80, alpha 0.11
      level4: '#e87500', // palette.primary80, alpha 0.12
      level5: '#e87500', // palette.primary80, alpha 0.14
    },
    primaryContainer: '#154734',
    secondaryContainer: 'white',
    tertiary: 'white',
    tertiaryContainer: '#154734',
    surfaceDisabled: 'white',
    error: 'white',
    errorContainer: 'white',
    onTertiary: 'white',
    onSurfaceDisabled: 'white',
    onError: 'white',
    inverseSurface: 'white',
    inverseOnSurface: 'white',
    inversePrimary: 'white',
    shadow: 'white',
    scrim: 'white',
  },
}
