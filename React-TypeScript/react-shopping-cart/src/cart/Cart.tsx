import CartItem from "../CartItem/CartItem"
import { Wrapper } from "./Cart.style"
import { CartItemType } from "../App"

type Props = {
  cartItems: CartItemType[],
  handleAddToCart: (clickItem: CartItemType) => void,
  handleRemoveFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, handleAddToCart, handleRemoveFromCart }) => {
  return (
    <>
      <Wrapper>
        <h2>your shopping cart</h2>
        {cartItems.length === 0 ? <p>no item in your cart</p> : null}
        {
          cartItems.map(item => (
            <CartItem 
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))
        }
      </Wrapper>
    </>
  )
}

export default Cart
