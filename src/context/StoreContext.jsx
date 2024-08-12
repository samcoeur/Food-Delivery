import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({})

    const addToCart =(itemId) => {
        if(!cartItems[itemId]){
           setCartItems({...cartItems , [itemId]:1})    
               
        }else{
            setCartItems({...cartItems,[itemId]:cartItems[itemId]+1})
        }
    }
    const removeFromCart =(itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }
    

   const  totalCost = ()=>{
         let total = 0;
         for(const item in cartItems){

            if(cartItems[item] > 0){
                let itemInfos = food_list.find((prod)=>prod._id===item);
                total += itemInfos.price * cartItems[item];
            }
          
         }
         return total
   }

    const contextValue = {
        food_list ,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        totalCost
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
