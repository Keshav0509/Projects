import React from 'react'
import { Button } from '@material-ui/core'
import { CartItemType } from '../App'
import { Wrapper } from './CartItem.style'

type Props = {
  item: CartItemType,
  handleAddToCart: (clickItem: CartItemType) => void,
  handleRemoveFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({item, handleAddToCart, handleRemoveFromCart}) => {
  return (
    <>
      <Wrapper>
        <h3>{item.title}</h3>
        <div className='information'>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className='btns'>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={()=>handleRemoveFromCart(item.id)}
          >-</Button>
          <p>{item.amount}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={()=>handleAddToCart(item)}
          >+</Button>
        </div>
        <img src={item.image} alt={item.title} />
      </Wrapper>
    </>
  )
}

export default CartItem
