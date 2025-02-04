import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { FaPhone, FaMapMarkerAlt, FaClock, FaGlobe, FaBars, FaTimes, FaSearch, FaChevronDown } from "react-icons/fa"
import "../styles/Header.css"
import logo3 from "../assets/yevros.png"

function Header() {
  const [currentLanguage, setCurrentLanguage] = useState("uz")
  const [translations, setTranslations] = useState({})
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false) // Added new state
  const dropdownRef = useRef(null)
  const searchInputRef = useRef(null)

  useEffect(() => {
    const loadTranslations = async () => {
      const translationsModule = await import(`./${currentLanguage}.js`)
      setTranslations(translationsModule.default)
    }
    loadTranslations()
  }, [currentLanguage])

  useEffect(() => {
    if (isSearchVisible && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchVisible])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <header>
      {/* Sliding Search Bar */}
      <div className={`sliding-search-bar ${isSearchVisible ? "show" : ""}`}>
        <div className="search-container">
          <input ref={searchInputRef} type="text" placeholder="Search" className="sliding-search-input" />
          <button className="sliding-search-close" onClick={toggleSearch}>
            <FaTimes />
          </button>
        </div>
      </div>

      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info-left">
            <div className="info-item">
              <FaPhone />
              <span>+998 97 033 34 55</span>
            </div>
            <div className="info-item">
              <FaClock />
              <span>{translations.workingHours}</span>
            </div>
          </div>
          <div className="contact-info-right">
            <div className="info-item">
              <FaMapMarkerAlt />
              <span>{translations.manzils}</span>
            </div>
            <button className="application-button">{translations.sendApplication}</button>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="header-content">
          <div className="header-left">
            <Link to="/" className="logo">
              <img src={logo3 || "/placeholder.svg"} alt="YEVRO-VENT SYSTEM" />
            </Link>
            <div className="desktop-search">
              <div className="search-bar">
                <input type="text" className="search-input" placeholder={translations.searchPlaceholder} />
                <button className="search-button">{translations.search}</button>
              </div>
            </div>
          </div>
          <div className="header-right">
            <nav className="main-nav desktop-nav">
              <ul>
                <li>
                  <Link to="/">{translations.home}</Link>
                </li>
                <li>
                  <Link to="/catalog">{translations.catalog}</Link>
                </li>
                <li>
                  <Link to="/blog">{translations.blog}</Link>
                </li>
                <li className="dropdown" ref={dropdownRef}>
                  <button onClick={toggleDropdown} className="dropdown-toggle">
                    {translations.pages} <FaChevronDown className={isDropdownOpen ? "rotate" : ""} />
                  </button>
                  <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                    <li>
                      <Link to="/home1">Home 1</Link>
                    </li>
                    <li>
                      <Link to="/home2">Home 2</Link>
                    </li>
                    <li>
                      <Link to="/home3">Home 3</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">{translations.aboutUs}</Link>
                </li>
              </ul>
            </nav>
            <div className="language-selector">
              <FaGlobe />
              <select value={currentLanguage} onChange={(e) => changeLanguage(e.target.value)}>
                <option value="uz">O'zbek</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="mobile-buttons">
              <button className="search-toggle" onClick={toggleSearch}>
                <FaSearch />
              </button>
              <button className="menu-button" onClick={toggleSidebar}>
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <select
            value={currentLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            className="sidebar-language-selector"
          >
            <option value="uz">O'zbek</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
          <button className="close-button" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/" onClick={toggleSidebar}>
                {translations.home || "Asosiy"}
              </Link>
            </li>
            <li>
              <Link to="/catalog" onClick={toggleSidebar}>
                {translations.catalog || "Toifalar"}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleSidebar}>
                {translations.aboutUs || "Biz haqimizda"}
              </Link>
            </li>
            <li className="sidebar-dropdown">
              {" "}
              {/* Updated sidebar dropdown */}
              <button onClick={() => setIsSidebarDropdownOpen(!isSidebarDropdownOpen)}>
                {translations.pages || "Sahifalar"}
                <FaChevronDown className={isSidebarDropdownOpen ? "rotate" : ""} />
              </button>
              <ul className={`sidebar-dropdown-menu ${isSidebarDropdownOpen ? "show" : ""}`}>
                <li>
                  <Link to="/home1" onClick={toggleSidebar}>
                    Home 1
                  </Link>
                </li>
                <li>
                  <Link to="/home2" onClick={toggleSidebar}>
                    Home 2
                  </Link>
                </li>
                <li>
                  <Link to="/home3" onClick={toggleSidebar}>
                    Home 3
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/blog" onClick={toggleSidebar}>
                {translations.blog || "Blog"}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleSidebar}>
                {translations.contact || "Aloqa"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </header>
  )
}

export default Header

