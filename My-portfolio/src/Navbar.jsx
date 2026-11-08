import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About Me</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>My skills</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>My Projects</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contacts</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;