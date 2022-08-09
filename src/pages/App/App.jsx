import * as C from "./style"
import { useEffect, useState } from 'react'

import { MainRoutes } from '../../routes/MainRoutes'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

function App() {
  return (
    <C.Container>
      <Header/>
      <C.Main>
        <MainRoutes/>
      </C.Main>
      <Footer/>
    </C.Container>
  )
}

export default App
