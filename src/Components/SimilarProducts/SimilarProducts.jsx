import React from 'react';

// Import fethcing function
import fetchSimilarProducts from '../../services/fetch-similar-products';

// Import Product Card Component
import ProductCard from '../ProductCard/ProductCard';

// Import styles
import './SimilarProducts.scss'

// I use here class based component because in the task rules : Shouldn't use hooks.
class SimilarProducts extends React.Component {
  constructor() {
    super();
    // initailize state
    this.state = {
      productsData: []
    };
  }

  componentDidMount() {
    // call data fetching function
    this.fetchData();
  }

  // data fetching function
  fetchData = async () => {
    try {
      const data = await fetchSimilarProducts();
      this.setState({ productsData: data });
    } catch (error) {
      console.log('Error happen when fetch : ', error.message)
    }
  };

  render() {
    return (
      <section className="sim-products">
        <h3 className="sim-head">
          Similar Products
        </h3>
  
        <h4 className="may-like">
          You may like these products also
        </h4>
        
        <section className="products-wrapper flexy">
          {this.state.productsData && this.state.productsData.map( (product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </section>
      </section>
    )
  }
}

export default SimilarProducts