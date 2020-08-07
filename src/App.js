/*

  App.js is used to control all React Context Providers

*/

import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core'

import { Layout } from './components'
import theme from './theme'
import './App.css'

const muiTheme = createMuiTheme({
  // status: {
  //   danger: orange[500],
  // },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme} full>
        <Layout />
      </MuiThemeProvider>
    </ThemeProvider>
  )
}

export default App
