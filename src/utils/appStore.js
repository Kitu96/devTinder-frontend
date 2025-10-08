import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Adjust the path as needed
import feedReducer from "./feedSlice"; // Adjust the path as needed

const appStore = configureStore({   
    reducer: {
        user: userReducer,
        feed : feedReducer
    }
})

export default appStore;