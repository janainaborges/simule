import React, { useState, useEffect } from 'react';
import './styles.module.scss';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <h1>hey</h1>
        {/* <div className="navbar-conatiner">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}></Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Início
              </Link>
            </li>

            <li>
              <Link to="/contact" className="nav-links-mobile" onClick={closeMobileMenu}>
                Agende uma demonstração
              </Link>
            </li>
          </ul>
        </div>
        {button && (
          <Link to="/contact">
            <Button buttonStyle="btn--outline">Agende uma demonstração</Button>
          </Link>
        )} */}
      </nav>
    </>
  );
}

export default Navbar;
