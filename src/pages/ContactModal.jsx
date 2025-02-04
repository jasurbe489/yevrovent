import { useState } from "react"
import { Toaster, toast } from "react-hot-toast"
import "./ContactModal.css"

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Replace BOT_TOKEN and CHAT_ID with your Telegram bot credentials
    const BOT_TOKEN = "7804994081:AAEri6njhb_--yi9sbio8s9hFbjYFi_8TW0"
    const CHAT_ID = "7270212196"

    const message = `Yangi xabar:\nIsm: ${formData.name}\nTelefon: ${formData.phone}`

    const loadingToast = toast.loading("Yuborilmoqda...", { duration: 2000 })

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)) // 2 second delay
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      })

      toast.success("Xabaringiz muvaffaqiyatli yuborildi!", {
        id: loadingToast,
        duration: 3000,
      })

      setFormData({ name: "", phone: "" })
      setIsOpen(false)
    } catch (error) {
      toast.error("Xatolik yuz berdi. Qaytadan urinib ko'ring", {
        id: loadingToast,
        duration: 3000,
      })
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#10B981",
              color: "white",
            },
          },
          error: {
            style: {
              background: "#EF4444",
              color: "white",
            },
          },
          loading: {
            style: {
              background: "#3B82F6",
              color: "white",
            },
          },
        }}
      />

      <div className="contact-widget">
        {isOpen && (
          <div className="modal-container">
            <div className="modal-content">
              <h2>Raqamingizni qoldiring, biz siz bilan bog'lanamiz</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Ism"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Yuborish</button>
              </form>
            </div>
          </div>
        )}

        <button className={`contact-button ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
              <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z" />
            </svg>
          )}
        </button>
      </div>
    </>
  )
}

export default ContactModal

