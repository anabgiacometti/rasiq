import { useEffect, useState } from 'react';
import NavLinks from './navLink/index';
import './style.css'
import logo from '../../static/images/logo.jpeg'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [indexScrolled, setIndexScrolled] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    const __indexScrolled = window.pageYOffset / window.innerHeight
    setIndexScrolled(Math.round(__indexScrolled))
    setIsScrolled(position > window.innerHeight / 4);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className={isScrolled ? 'scrolled' : 'original'}>
      <div className='logo'>
        <img src={logo} />
        <label><span className='special'>Rasiq </span> Marcenaria</label>
      </div>
      <NavLinks indexScrolled={indexScrolled} />
    </nav>
  );
}