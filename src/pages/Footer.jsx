import { Link } from "react-router-dom"
import { FaFacebookF, FaWhatsapp, FaGoogle } from "react-icons/fa"
import "./Footer.css"
import logo3 from "../assets/yevros.png"

function Footer({ currentLanguage, translations }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <Link to="/" className="footer-logo">
            <img src={logo3 || "/placeholder.svg"} alt="YEVRO-VENT SYSTEM" />
          </Link>
          <p className="address">{translations?.address || "Yashnobod, Boysun ko'chasi, 67-uy"}</p>
          <div className="social-links">
            <a href="#" className="social-link">
              <FaGoogle />
            </a>
            <a href="#" className="social-link">
              <FaFacebookF />
            </a>
            <a href="#" className="social-link">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>{translations?.findProduct || "Mahsulotlar"}</h3>
          <ul>
            <li>
              <Link to="/brownze-arnold">{translations?.brownzeArnold || "Konditsionerlar"}</Link>
            </li>
            <li>
              <Link to="/chronograph">{translations?.chronographBlue || "Ventilyatorlar"}</Link>
            </li>
            <li>
              <Link to="/smart-phones">{translations?.smartPhones || "Isitish tizimlari"}</Link>
            </li>
            <li>
              <Link to="/automatic-watch">{translations?.automaticWatch || "Sovutish tizimlari"}</Link>
            </li>
            <li>
              <Link to="/hair-straighteners">{translations?.hairStraighteners || "Montaj ishlari"}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{translations?.getHelp || "Yordam"}</h3>
          <ul>
            <li>
              <Link to="/about">{translations?.aboutUs || "Biz haqimizda"}</Link>
            </li>
            <li>
              <Link to="/contact">{translations?.contactUs || "Bog'lanish"}</Link>
            </li>
            <li>
              <Link to="/return-policy">{translations?.returnPolicy || "Qaytarish siyosati"}</Link>
            </li>
            <li>
              <Link to="/privacy-policy">{translations?.privacyPolicy || "Maxfiylik siyosati"}</Link>
            </li>
            <li>
              <Link to="/payment-policy">{translations?.paymentPolicy || "To'lov siyosati"}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{translations?.aboutUs || "Biz haqimizda"}</h3>
          <ul>
            <li>
              <Link to="/news">{translations?.news || "Yangiliklar"}</Link>
            </li>
            <li>
              <Link to="/service">{translations?.service || "Xizmatlar"}</Link>
            </li>
            <li>
              <Link to="/our-policy">{translations?.ourPolicy || "Bizning siyosat"}</Link>
            </li>
            <li>
              <Link to="/customer-care">{translations?.customerCare || "Mijozlarga xizmat"}</Link>
            </li>
            <li>
              <Link to="/faq">{translations?.faq || "Ko'p so'raladigan savollar"}</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

