import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"; // Adjust the path as needed

const appStore = configureStore({   
    reducer: {
        user: userSlice
    }
})

export default appStore;