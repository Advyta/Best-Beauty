import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartContents',
    initialState: {
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : localStorage.setItem('cart', JSON.stringify([])), 
        status: 'idle', error: null
    },
    
    reducers:{
        addToCart:(state, action) =>{
            if (!state.cart) {
                state.cart = [action.payload];
            } else {
                const productInCart = state.cart.find(product => product.id === action.payload.id);
                if (productInCart) {
                    let update = state.cart.map((product) => {
                        if (product.id === action.payload.id) {
                            return { ...product, quantity: product.quantity + action.payload.quantity }
                        } else {
                            return product;
                        }
                    });
                    state.cart = update;
                } else {
                    state.cart = [...state.cart, action.payload];
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },

        incrementQuantity: (state, action) => {
            const productInCart = state.cart.find(product => product.id === action.payload.id);
            if (productInCart.quantity >= 1) {
                state.cart = state.cart.map((product) => product.id === action.payload.id 
                ? { ...product, quantity: (productInCart.quantity += 1)}
                : product);
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
            // console.log('incrementQuantity' + state.cart);
        },

        decrementQuantity: (state, action) => {
            const productInCart = state.cart.find(product => product.id === action.payload.id);
            // if quantity is less than 1 remove the product from the cart else decrease its quantity
            if (productInCart.quantity === 1) {
                state.cart = state.cart.filter((product) => product.id !== action.payload.id) 
            } else {
                state.cart = state.cart.map((product) => product.id === action.payload.id 
                    ? {...product, quantity: (productInCart.quantity -= 1)}
                    : product
                );
            }
            // console.log('decrementQuantity' + state.cart);
        },

        removeFromCart: (state, action) => {
            const productInCart = state.cart.find(product => product.id === action.payload.id);
            if (productInCart) {
                state.cart = state.cart.filter((product) => product.id !== action.payload.id);
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },

    }
})

export const costOfProduct = state => {
    let productCost = 0;
    if(state.cartContents.cart){
        productCost = state.cartContents.cart.reduce((total, product) => total + product.price * product.quantity, 0);
    }
    return productCost;
}

export const {addToCart, incrementQuantity, decrementQuantity, removeFromCart, productCost} = cartSlice.actions;
export default cartSlice.reducer;