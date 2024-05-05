import "./App.css"
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header, Footer } from './sections/index'
import { Container } from "./components/index"
import { Home, ShoppingLists, AboutUs } from './Pages/index'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shoppinglists" element={<ShoppingLists />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  )
}

export default App