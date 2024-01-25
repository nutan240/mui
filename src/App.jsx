import React from 'react'
import Loginpage from './pages/Loginpage'
import Formpage from './pages/Formpage'
import Cardpage from './pages/Cardpage'
import { Box } from '@mui/material'
import Adduser from './pages/Adduser'
import Apicall from './pages/Apicall'

function App() {
  return (
  <>
  <Box sx={{bgcolor:'#d8d8d1', height:'100%'}}>
  
  <Apicall/>
  </Box>

  </>
  )
}

export default App
