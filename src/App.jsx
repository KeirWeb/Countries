import { useState } from 'react'

import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Alert, Container } from '@mui/material'
import { CountriesPage } from './pages/CountriesPage/CountriesPage'
import {CountryPage} from './pages/CountryPage/CountryPage'

function App() {

  const [error,setError]=useState(null)
  const [isLoading,setIsLoading]=useState(true)

  const changeError=(error)=>{
    setError(error)
  }
  const changeIsLoading=(isLoading)=>{
    setIsLoading(isLoading)
  }

 const isShowContent=isLoading&& error


  return (
    <Container maxWidth='lg'>
      {isLoading && <div>...Loading</div>}
      {error && <Alert severity="error">This is an error Alert.</Alert>}
      
   
    <Routes>
      <Route  element={<CountriesPage isShowContent={!isShowContent} changeError={changeError} changeIsLoading={changeIsLoading}/> }  path='/'/>
      <Route element={<CountryPage isShowContent={!isShowContent} changeIsLoading={changeIsLoading} changeError={changeError}/>} path='/:name'/>
    </Routes>
      

    </Container>

   
  )
}

export default App
