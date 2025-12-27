function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <span className="logo">Subodha</span>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
