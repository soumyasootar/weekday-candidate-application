import { useState } from 'react'
import './App.css'
import { Button, Container } from '@mui/material'
import Card from './components/Card'

function App() {
  return (
    <>
    <Container maxWidth="sm" sx={{marginTop:"50px"}} >
      <Card/>
    </Container>
    </>
  )
}

export default App
