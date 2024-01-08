// Import Styles
import './CartItemCard.scss'

// Import dummy data image
import productImg from '../../images/thumbnail.png';

const CartItemCard = ({product,onRemoveItem}) => {
  return (
    <div className='cart-item flexy'>
        {/* Product Image */}
        <div className="item-img">
            <img src={productImg} alt={product.name} width={100} height={100} />
        </div>

        {/* Product Image */}
        <div className="item-details">
            {/* Name */}
            <p className="product-name">
                {product.product.name}
            </p>
            
            {/* Quantity */}
            <p className="product-quantity">
                Quantity: {product.quantity}
            </p>

            {/* Price And remove */}
            <div className="price-remove flexy">
                {/* Price */}
                <p className="price">
                    {product.product.priceAfterDis}
                    <span>LE</span>
                </p>

                {/* Remove */}
                <button className="remove" onClick={() => onRemoveItem(product)}>Remove</button>
            </div>
        </div>
    </div>
  )
}

export default CartItemCard