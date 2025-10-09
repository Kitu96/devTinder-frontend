import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Adjust the path as needed
import feedReducer from "./feedSlice"; // Adjust the path as needed
import ConnectionReducer from "./connectionSlice";

const appStore = configureStore({   
    reducer: {
        user: userReducer,
        feed : feedReducer,
        Connections : ConnectionReducer
    }
})

export default appStore;