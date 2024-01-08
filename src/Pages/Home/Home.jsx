import React from 'react'
import { YeshteryNav, MainNav, ProductDetails, SimilarProducts } from '../../Components'

// Lazy Load Product Details Component
const ProductDetailsLazy = React.lazy( ()=> import('../../Components/ProductDetails/ProductDetails') )

// Lazy Load Similar Products Component
const SimilarProductsLazy = React.lazy( ()=> import('../../Components/SimilarProducts/SimilarProducts') )

// Lazy Load Footer Component
const FooterLazy = React.lazy( ()=> import('../../Components/Footer/Footer') )

// I use here class based component because in the task rules : Shouldn't use hooks.
class Home extends React.Component {
  // CART State
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }
  // Add to cart Functionality 
  addToCart = (product, quantity) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, { product, quantity }],
    }));
  };
  // Remove from cart Functionality
  removeItem = (itemToRemove) => {
    const newCart = this.state.cart.filter((item) => item !== itemToRemove);
    this.setState({ cart: newCart });
  };

  render() {
    return (
      <>
          {/* Header */}
          <header>
              <YeshteryNav />
              <MainNav cartItems={this.state.cart} onRemoveItem={this.removeItem} cartCount={this.state.cart.length} />
          </header>
  
          {/* Product Details */}
          <React.Suspense fallback='Loading ...'>
            <ProductDetailsLazy onAddToCart={this.addToCart} />
          </React.Suspense>
  
          {/* Similar Products */}
          <React.Suspense fallback='Loading ...'>
            <SimilarProductsLazy/>
          </React.Suspense>
  
          {/* Footer Lazy */}
          <React.Suspense fallback='Loading ...'>
            <FooterLazy/>
          </React.Suspense>
      </>
    )
  }
}

export default Home