export const initialState = {
    cart: [],
    user: null,
  };
  
  export const getTotal = (cart) => 
    cart.reduce((amount, item) => item.price + amount, 0);
    
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [ ...state.cart, action.item ],
        }

      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
  
      default:
        return state;
    }
  };
  
  export default reducer;