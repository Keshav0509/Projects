import { useState } from "react"
import { useQuery } from "react-query"
// components ...
import {Grid, Badge, Drawer, LinearProgress, colors} from "@material-ui/core"
import { AddShoppingCart, CodeSharp } from "@material-ui/icons"
import Item from "./items/Items"
import Cart from "./cart/Cart"
// styles ...
import { Wrapper, StyledButton } from "./App.styles"


// Type
export type CartItemType = {
  id: number,
  category: string,
  discription: string,
  image: string,
  price: number,
  title: string,
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => {
  const url = 'https://fakestoreapi.com/products'
  return await (await fetch(url)).json();
}

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState<CartItemType[]>([]);
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  // console.log(data);

  function getTotalItems(item: CartItemType[]){
    return item.reduce((ack: number, items) => ack + items.amount, 0)
  }
  function handleAddToCart(clickedItem: CartItemType){
    setCartItem( prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if(isItemInCart){
        return prev.map(item => 
          item.id === clickedItem.id
          ? {...item, amount: item.amount + 1}
          : item 
        );
      }
      return [...prev, {...clickedItem, amount: 1}];
    });
  };

  function handleRemoveFromCart(id: number){
    setCartItem(prev => (
      prev.reduce((ack, item) => {
        if(item.id === id){
          if(item.amount === 1) return ack;
          return [...ack, {...item, amount: item.amount - 1 }];
        }else{
          return [...ack, item];
        }
      }, [] as CartItemType[])
    ))
  }


  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong... :</div>

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={()=>setCartOpen(false)}>
        <Cart cartItems={cartItem} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
      </Drawer>
      <StyledButton onClick={()=> setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItem)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default App
