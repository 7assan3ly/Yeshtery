import React from 'react'

// Import Styles
import './CartSlider.scss'

// Import Assets
import CloseIcon from '/images/close.svg'

// Import Cart Item Component
import CartItemCard from '../CartItemCard/CartItemCard';

class CartSlider extends React.Component{
    
  render() {
    const { cartItems, onRemoveItem, isOpen, onClose } = this.props;
    console.log('cartItems', cartItems)

    // Calculate Total Price
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => {
          return total + item.product.price * item.quantity;
        }, 0);
    };
    return (
        <section>
            <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>

            <aside className={`cart-slider ${isOpen ? 'open' : ''}`}>
                <div className="close-cart">
                    <img src={CloseIcon} alt='close cart' onClick={onClose}/>
                </div>

                <p className="cart-head">My Cart</p>

                {cartItems.length === 0 && (
                    <p className="cart-empty">Cart Is Empty</p>
                )}

                {cartItems.length > 0 && (
                    <div className="non-empty">
                        <p className="cart-sum">Cart Summary</p>
                        {cartItems.map((item,idx) =>(
                            <CartItemCard key={idx} product={item} onRemoveItem={onRemoveItem} />
                        ))}

                        <p className='total-price'>Total Price: {calculateTotalPrice()}LE</p>

                        <div className="cart-actions flexy">
                            <button>Review Cart</button>
                            <button>Complete Checkout</button>
                        </div>
                    </div>
                )}
            </aside>
        </section>
    )
  }
}

export default CartSlider