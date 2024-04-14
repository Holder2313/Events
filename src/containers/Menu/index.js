import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import arrow from './arrow.svg'

import "./style.scss";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 490) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }; 

    
    handleResize();

   
    window.addEventListener('resize', handleResize);

    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
      <div className="menu-collapse"> 

        <button className={` ${isOpen ? 'button-up' : 'button-down'} `} onClick={() => setIsOpen(!isOpen)} type="button" >
          <img src={arrow} alt="toggle menu" />
        </button>
        <Logo />
      </div>

      <ul className={` ${isOpen ? 'ul' : 'ul-hide'} `} >
        <li><a href="#nos-services">Nos services</a></li>
        <li><a href="#nos-realisations">Nos réalisations</a></li>
        <li><a href="#notre-equipe">Notre équipe</a></li>
      </ul>
      <div className="btn"> 
        <Button title="contact" onClick={() => { window.document.location.hash = "#contact"; }}>
        Contact
      </Button>
      </div>
      
    </nav>
  );
}

export default Menu;
