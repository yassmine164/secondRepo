import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./Navbar.css";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { title: 'Home', section: 'home' },
    { title: 'Services', section: 'services' },
    { title: 'Our Projects', section: 'ourprojects' },
    { title: 'About us', section: 'aboutus' },
    { title: 'Contact us', section: 'contactus' },
    { title: 'Login', route: './login' },
    
  ];

  // Section observer for active link
  useEffect(() => {
    if (location.pathname === '/') {
      const sections = document.querySelectorAll('section');
      let observer;
  
      const handleIntersection = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Find the most visible section
            const visibleEntry = entries.find(e => e.isIntersecting);
            if (visibleEntry?.target) {
              setActiveSection(visibleEntry.target.id);
            }
          }
        });
      };
  
      observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.3,
        rootMargin: '0px 0px -50% 0px' // Track when section enters middle 50% of viewport
      });
  
      sections.forEach(section => observer.observe(section));
      
      return () => {
        sections.forEach(section => observer?.unobserve(section));
      };
    } else {
      setActiveSection(null); // Clear active section when leaving homepage
    }
  }, [location]);
  
  const handleNavigation = async (e, item) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
  
    if (item.route) {
      navigate(item.route);
    } else {
      if (location.pathname !== '/') {
        await navigate('/'); // Wait for navigation to complete
      }
      
      // scroll handling
      const scrollToSectionWithRetry = (retries = 5) => {
        const section = document.getElementById(item.section);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.replaceState(null, '', `#${item.section}`);
        } else if (retries > 0) {
          setTimeout(() => scrollToSectionWithRetry(retries - 1), 50);
        }
      };
      
      scrollToSectionWithRetry();
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">NL</div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.title}>
              {item.route ? (
                <Link
                  to={item.route}
                  className={location.pathname === item.route ? 'active' : ''}
                >
                  {item.title}
                </Link>
              ) : (
                <a
                  href={`#${item.section}`}
                  className={activeSection === item.section ? 'active' : ''}
                  onClick={(e) => handleNavigation(e, item)}
                >
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            item.route ? (
              <Link
                key={item.title}
                to={item.route}
                className={location.pathname === item.route ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ) : (
              <a
                key={item.title}
                href={`#${item.section}`}
                className={activeSection === item.section ? 'active' : ''}
                onClick={(e) => handleNavigation(e, item)}
              >
                {item.title}
              </a>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;