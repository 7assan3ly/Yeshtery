// Import Styles
import './ProductCard.scss'

// Import Product Image
import Adidas from '/images/adidas.svg'

const ProductCard = ({product}) => {
  return (
    <section className='product'>
      {/* Product Image */}
      <img className='product-image' src={product.image} alt='Product Image'/>

      {/* Product Name */}
      <p className='product-name'>{product.title}</p>

      {/* Product Price and Brnad */}
      <div className="price-brand flexy">
        {/* Price */}
        <div className="price">
          <p className="price-after">{product.price} <span>LE</span></p>
          {
            product.price!==0 && (
              <p className="price-before flexy">
                <p>{product.price} LE</p>
                <span className='discount'>
                  30% Off
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
        <p>{product.rating?.rate} Of 5</p>
      </div>

      {/* Pickup INF */}
      <div className="pickup flexy">
          <p>From: <span>Egypt</span></p>
          <p>To: <span>UK</span></p>
          <p>in: <span>7 Days</span></p>
      </div>
    </section>
  )
}

export default ProductCard