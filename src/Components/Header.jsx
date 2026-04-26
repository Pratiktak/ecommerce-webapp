import { Link } from "react-router-dom"
import { useState } from "react"
import "../index.css"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header>
        <nav id="navbar">
          <ul>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/pc">PC</Link></li>
            <li><Link to="/mobile">Mobile</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>

          <div id="navbar-auth">
            {/* Circle button */}
            <button id="user-circle" onClick={() => setOpen(!open)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </button>

            {/* Dropdown */}
            <div id="auth-dropdown" className={open ? "open" : ""}>
              <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
              <Link to="/signup" onClick={() => setOpen(false)}>Register</Link>
              <Link to="/partner" onClick={() => setOpen(false)}>Register as Partner</Link>
            </div>
          </div>

        </nav>
      </header>
    </>
  )
}