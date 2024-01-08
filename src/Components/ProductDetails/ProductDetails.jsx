import React from 'react';
// Import styles
import './ProductDetails.scss'
// Import fethcing function
import fetchProductData from '../../services/fetch-product';
// Import dummy data images
import productImg from '../../images/thumbnail.png';
import ArrowLeft from '/images/arrow-left.svg'
import ArrowRight from '/images/arrow-right.svg'
import Slider1 from '../../images/slider1.png';
import Slider2 from '../../images/slider2.png';
import Slider3 from '../../images/slider3.png';
import Slider4 from '../../images/slider4.png';
import Adidas from '/images/adidas.svg'
import Color1 from '../../images/color1.png'
import Color2 from '../../images/color2.png'
import Plus from '/images/plus.svg'
import Minus from '/images/minus.svg'
// Import components
import BreadCrumb from "../BreadCrumb/BreadCrumb" 

// I use here class based component because in the task rules : Shouldn't use hooks.
class ProductDetails extends React.Component {

  constructor() {
    super();
    // initailize state
    this.state = {
      productData: [],
      quantityCount: 1
    };
  }

  componentDidMount() {
    // call data fetching function
    this.fetchData();
  }

  // data fetching function
  fetchData = async () => {
    try {
      const data = await fetchProductData();
      this.setState({ productData: data });
    } catch (error) {
      console.log('Error happen when fetch : ', error.message)
    }
  };

  // quantityCount Processing
  quantityIncrement = () => {
    this.setState((prevState) => ({
      quantityCount: prevState.quantityCount + 1,
    }));
  };
  quantityDecrement = () => {
    this.setState((prevState) => ({
      quantityCount: Math.max(prevState.quantityCount - 1, 0),
    }));
  };  

  // Handle add to cart functionality
  handleAddToCart = () => {
    const { productData } = this.state;
    const productToAdd = productData;
    this.props.onAddToCart(productToAdd,this.state.quantityCount);
  };

  render() {
    return (
      <section className='product-wrapper'>
        <BreadCrumb
          name={this.state.productData.title}
          category={this.state.productData.category}
        />

        <div className="productDivider"></div>

        <section className='product-details'>
          {/* IMAGES Section */}
          <section className='images-wrapper'>
            <div className="thumbnail">
              <img src={productImg} alt={this.state.productData.title} width={550} height={550} />
            </div>
            <div className="carousel flexy">
              <img src={ArrowLeft} alt="Arrow Left" width={16} height={24} />
              <img src={Slider1} alt="Product Image 1" width={120} height={120} />
              <img src={Slider2} alt="Product Image 2" width={120} height={120} />
              <img src={Slider3} alt="Product Image 3" width={120} height={120} />
              <img src={Slider4} alt="Product Image 4" width={120} height={120} />
              <img src={ArrowRight} alt="Arrow Right" width={16} height={24} />
            </div>
          </section>

          {/* Product Details Section */}
          <section className='details-wrapper'>
            {/* Adidas Logo */}
            <div className='adidas-logo'>
              <img src={Adidas} alt="Adidas" width={60} height={40} />
            </div>

            {/* Product Description */}
            <h3 className="desc">{this.state.productData.description}</h3>

            {/* Category */}
            <p className="catg">{this.state.productData.category}</p>

            {/* Rating */}
            <div className="rating flexy">
              <p>&#9733;&#9733;&#9733;&#9733;&#9734;</p>
              <p>{this.state.productData.rating?.rate} Of 5</p>
              <p>{this.state.productData.rating?.count} Rates</p>
            </div>

            {/* Price */}
            <div className="price flexy">
              <p>{this.state.productData.price} <span>LE</span></p>
              <p>{this.state.productData.price} LE</p>
              <p className="discount">
                30% Off
              </p>
            </div>

            {/* Divider */}
            <div className="productDivider"></div>

            {/* Sizes */}
            <div className="sizes-wrapper">
              <p className='size-head'>Size</p>
              <ul className='sizes'>
                <li>
                  <p>Small</p>
                </li>
                <li>
                  <p>Medium</p>
                </li>
                <li>
                  <p>Large</p>
                </li>
                <li>
                  <p>X Large</p>
                </li>
                <li>
                  <p>XX Large</p>
                </li>
              </ul>
            </div>

            {/* Divider */}
            <div className="productDivider"></div>

            {/* Colors */}
            <div className="colors-wrapper">
              <p className='colors-head'>Color</p>
              <ul className="colors">
                <li className='active'>
                  <img src={Color1} alt='Product Color' width={80} height={80}/>
                </li>
                <li>
                  <img src={Color2} alt='Product Color' width={80} height={80}/>
                </li>
              </ul>
            </div>

            {/* Divider */}
            <div className="productDivider"></div>

            {/* Product Actions */}
            <div className="actions">
              <div className="quantity">
                <p className='quan-head'>Quantity</p>
                <div className="quan-action flexy">
                  <button onClick={this.quantityDecrement}>
                    <img src={Minus} alt="Minus" />
                  </button>
                  <span>{this.state.quantityCount || 1}</span>
                  <button onClick={this.quantityIncrement}>
                    <img src={Plus} alt="Plus" />
                  </button>
                </div>
              </div>

              <div className="btns flexy">
                <button onClick={this.handleAddToCart}>Add To Cart</button>
                <button>Pickup From Store</button>
              </div>
            </div>
          </section>
        </section>
      </section>
    )
  }
}

export default ProductDetails