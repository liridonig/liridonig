import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CartItemContainer, ItemDetails, NameItem } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart } = useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <NameItem>{name}</NameItem>
        <span className="price">
          {quantity} x {price}
        </span>
        <div className="remove-button" onClick={clearItemHandler}>
          &#10005;
        </div>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
