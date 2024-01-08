// Import styles
import './Footer.scss';

// Import Images
import YellowLogo from '/images/logo-yellow.svg'
import Subscribe from '/images/subscribe.svg'
import Facebook from '/images/facebook.svg'
import Instagram from '/images/instagram.svg'
import Twitter from '/images/twitter.svg'
import Linkedin from '/images/linkedin.svg'
import Visa from '/images/visa.png'
import Mastercard from '/images/mastercard.png'
import Cash from '/images/cash.png'
import Nasnav from '/images/nasnav.png'

const Footer = () => {
  return (
    <footer>
      {/* Upper Section */}
      <section className='upper flexy'>
        {/* Left Section */}
        <div className="left flexy">
          <img src={YellowLogo} alt="Logo" width={220} height={55} loading='lazy' />

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
          <p>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia 
          </p>
          <p>
            m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
          </p>
        </div>

        {/* Right Section */}
        <div className="right">
          <div className="subscribe">
            <h3 className="sub-head">
              Subscribe to our newsletter
            </h3>
            <div className="sub-input flexy">
              <input type="text" placeholder='Enter Your Mail' />
              <button className='flexy'>
                <span>Subscribe</span>
                <img src={Subscribe} alt="Subscribe" loading='lazy' />
              </button>
            </div>
          </div>

          <div className="links flexy">
            <ul className="pages">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sell With Us</a></li>
              <li><a href="#">Shipping And Returns</a></li>
            </ul>

            <ul className="social">
              <li className='flexy'>
                <img src={Facebook} alt="Facebook" loading='lazy' />/YESHTERY
              </li>
              <li className='flexy'>
                <img src={Linkedin} alt="Linkedin" loading='lazy' />/YESHTERY
              </li>
              <li className='flexy'>
                <img src={Instagram} alt="Instagram" loading='lazy' />/YESHTERY
              </li>
              <li className='flexy'>
                <img src={Twitter} alt="Twitter" loading='lazy' />/YESHTERY
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="FooterDivider"></div>

      {/* Lower Section */}
      <section className='lower flexy'>
        <div className="rights">© 2021 yeshtery, all rights reserved.</div>

        <div className="payemnt flexy">
          <img src={Cash} alt="Cash on delivery" width={100} loading='lazy' />
          <img src={Visa} alt="Visa" width={65} loading='lazy'/>
          <img src={Mastercard} alt="Mastercard" width={65} loading='lazy' />
        </div>

        <div className="nasnav flexy">
          <span>Powered by</span>
          <img src={Nasnav} alt="Nasnav" width={100} loading='lazy' />
        </div>
      </section>
    </footer>
  )
}

export default Footer