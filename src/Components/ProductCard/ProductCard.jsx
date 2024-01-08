// Import Styles
import './ProductCard.scss'

// Import Product Image
import Product1 from '../../images/sim-product1.png'
import Product2 from '../../images/sim-product2.png'
import Product3 from '../../images/sim-product3.png'
import Product4 from '../../images/sim-product4.png'
import Adidas from '/images/adidas.svg'

const ProductCard = ({product}) => {
  const imageMap = {
    Product1,
    Product2,
    Product3,
    Product4
  };
  const ProductImage = imageMap[product.image];
  return (
    <section className='product'>
      {/* Product Image */}
      <img className='product-image' src={ProductImage} alt='Product Image'/>

      {/* Product Name */}
      <p className='product-name'>{product.name}</p>

      {/* Product Price and Brnad */}
      <div className="price-brand flexy">
        {/* Price */}
        <div className="price">
          <p className="price-after">{product.priceAfter} <span>LE</span></p>
          {
            product.priceBefore!==0 && product.discountPer!==0 && (
              <p className="price-before flexy">
                <p>{product.priceBefore} LE</p>
                <span className='discount'>
                  {product.discountPer}% Off
                </span>
              </p>
            )
          }
        </div>

        {/* Brand */}
        <div className="brand">
          <img src={Adidas} alt="Product brand" width={60} height={40} />
        </div>
      </div>

      {/* Rating */}
      <div className="rating flexy">
        <p>&#9733;&#9733;&#9733;&#9733;&#9734;</p>
        <p>{product.rating} Of 5</p>
      </div>

      {/* Pickup INF */}
      <div className="pickup flexy">
        {product.pickFrom && (
          <p>From: <span>{product.pickFrom}</span></p>
        )}
        {product.pickTo && (
          <p>To: <span>{product.pickTo}</span></p>
        )}
        {product.duration && (
          <p>in: <span>{product.duration} Days</span></p>
        )}
      </div>
    </section>
  )
}

export default ProductCard