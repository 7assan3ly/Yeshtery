// import component styles
import './YeshteryNav.scss'

// Import Icons
import NavDots from '/images/nav-dots.svg';
import Logo from '/images/logo.svg';
import ArrowLeft from '/images/arrow-left.svg';
import ArrowRight from '/images/arrow-right.svg';
import Contact from '/images/contact.svg';
import Shopping from '/images/shopping.svg';
import Location from '/images/location.svg';

const YeshteryNav = () => {
  return (
    <section className="top-section">
      {/* Left Part */}
      <div className="nav-logo flexy">
        <img src={NavDots} alt="Nav dots" />
        <img src={Logo} alt="Yeshtery Logo" />
      </div>

      {/* Center Part */}
      <div className="offers flexy">
        <img src={ArrowLeft} alt="Arrow Left" />

        <p>
          Valentine’s Day Offers! Buy Two Get One Free <span>Shop Now</span>
        </p>

        <img src={ArrowRight} alt="Arrow Right" />
      </div>

      {/* Right Part */}
      <div className="helpers flexy">
        <div className='flexy'>
          <img src={Contact} alt="Contact Us" />
          <p>Contact Us</p>
        </div>

        <div className='flexy'>
          <img src={Shopping} alt="Contact Us" />
          <p>Track Order</p>
        </div>
        
        <div className='flexy'>
          <img src={Location} alt="Contact Us" />
          <p>Find A Store</p>
        </div>
      </div>
    </section>
  )
}

export default YeshteryNav