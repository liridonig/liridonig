import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "../cart-item/cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart } = useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}
        </span>
        <div className="remove-button" onClick={clearItemHandler}>
          &#10005;
        </div>
      </div>
    </div>
  );
};

export default CartItem;
