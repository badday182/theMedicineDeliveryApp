import { configureStore } from "@reduxjs/toolkit"
import cartSliseReducer from "../redux/slices/cartSliseReducer"

const store = configureStore({
    reducer: {
        cart: cartSliseReducer,
      
    }
})

export default store