import * as React from "react"
import "./App.css"
import NavigationBar from "./components/NavigationBar"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <NavigationBar />
      <Footer />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
