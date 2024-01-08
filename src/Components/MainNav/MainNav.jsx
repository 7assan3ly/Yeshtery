import React from 'react';
// import component styles
import './MainNav.scss'

// Import Icons
import Search from '/images/search.svg';
import Adidas from '/images/adidas.svg';
import Cart from '/images/cart.svg';
import Heart from '/images/heart.svg';
import User from '/images/user.svg';
import CartSlider from '../CartSlider/CartSlider';

// I use here class based component because in the task rules : Shouldn't use hooks.
class MainNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
    };
  }

  openCart = () => {
    this.setState({ isCartOpen: true });
    console.log('toggled')
  };
  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  render() {
    return (
      <nav className='main-nav'>
        {/* UPPER Section */}
        <section className="upper">
          {/* Left Part */}
          <div className="search flexy">
            <img src={Search} alt="Search" />
            <input type="text" placeholder='Search' />
          </div>
  
          {/* Center Part */}
          <div>
            <img src={Adidas} alt="Adidas Logo" />
          </div>
  
          {/* Right Part */}
          <div className="helpers flexy">
            <button className='helper-btn flexy' onClick={this.openCart}>
              <img src={Cart} width={24} height={24} alt="Cart" />
              <div className='circle-overlay'>{this.props.cartCount}</div>
              <p>Cart</p>
            </button>
            {this.state.isCartOpen && 
              <CartSlider 
                cartItems={this.props.cartItems}
                onRemoveItem={this.props.onRemoveItem}
                isOpen={this.state.isCartOpen} 
                onClose={this.closeCart}
              />
            }
  
            <button className='helper-btn flexy'>
              <img src={Heart} width={24} height={24} alt="Wishlist" />
              <p>Wishlist</p>
            </button>
            
            <button className='helper-btn flexy'>
              <img src={User} width={24} height={24} alt="User Login" />
              <p>Login</p>
            </button>
          </div>
        </section>
        
        {/* LOWER Section */}
        <section className="lower">
          <ul>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Unisex</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#" className='text-red'>Offers</a></li>
          </ul>
        </section>
      </nav>
    )
  }
}

export default MainNav