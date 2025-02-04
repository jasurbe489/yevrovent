import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Header from "./components/Header"
import { useState, useEffect } from "react";

import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Blog from "./pages/Blog"
import About from "./pages/About"


import ContactModal from './pages/ContactModal'
function App() {

  return (
    <Router>
      <div>
      <Header />
      {/* Your other components */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
        <ContactModal/>
      </div>
    </Router>
  )
}

export default App

