import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false)
  const navRef = useRef(null)

  const navLink = `px-3 py-2 text-sm font-medium transition duration-200 hover:text-[var(--nav-hover)] focus:text-[var(--nav-hover)] ${isScroll ? 'text-[var(--text-primary)]' : 'text-[#eee]'}`;
  const navOverlayLink = `px-3 py-2 text-sm font-medium transition duration-200 hover:text-[var(--nav-hover)] focus:text-[var(--nav-hover)] text-[var(--text-primary)]`;
  
  useEffect(() => {
    const HandleScroll = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navRef.current?.classList.add('nav-scroll');
        navRef.current?.classList.add('shadow-md');
        navRef.current?.classList.add('shadow-[#6867676e]');
        setIsScroll(!isScroll)
      }
      else {
        navRef.current?.classList.remove('nav-scroll');
        navRef.current?.classList.remove('shadow-md');
        navRef.current?.classList.remove('shadow-[#6867676e]');
        setIsScroll(false)
      }
    }

    window.addEventListener('scroll', HandleScroll)

    return () => { window.removeEventListener('scroll', HandleScroll) }

  }, []);

  return (
    <nav ref={navRef} className="w-full z-50 absolute">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 xl:py-3 ">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <a href="/">
              <img src={logo} alt="Logo" className="w-[150px] lg:w-[180px]" />
            </a>
          </div>

          <div className="hidden xl:flex items-center space-x-6 mx-auto">
            <Link className={navLink} to="/">Home</Link>
            <Link className={navLink} to="/services">Services</Link>
            <Link className={navLink} to="/portfolio">Portfolio</Link>
            <Link className={navLink} to="/testimonials">Testimonials</Link>
            <Link className={navLink} to="/teams">Teams</Link>
            <Link className={navLink} to="/faqs">FAQs</Link>
            <Link className={navLink} to="/blog">News</Link>

          </div>

          <div className="flex xl:hidden items-center text-[var(--text-primary)]">
            <button className={`cursor-pointer ${isScroll ? 'text-[var(--text-primary)]' : 'text-[#eee]'}`} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (<i className="bi bi-x text-3xl"></i>) : (<i className="bi bi-list text-3xl"></i>)}
            </button>
          </div>

        </div>
      </div>

      <div className={`xl:hidden bg-[var(--primary-background)] px-4 pb-4 space-y-2 transition-all duration-500 overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <Link className={`${navOverlayLink} block`} to="/">Home</Link>
        <Link className={`${navOverlayLink} block`} to="/services">Services</Link>
        <Link className={`${navOverlayLink} block`} to="/portfolio">Portfolio</Link>
        <Link className={`${navOverlayLink} block`} to="/testimonials">Testimonials</Link>
        <Link className={`${navOverlayLink} block`} to="/teams">Teams</Link>
        <Link className={`${navOverlayLink} block`} to="/faqs">FAQs</Link>
        <Link className={`${navOverlayLink} block`} to="/blog">News</Link>

      </div>
    </nav>
  );
}

export default Navbar;
