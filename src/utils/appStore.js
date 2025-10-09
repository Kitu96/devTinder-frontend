import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Adjust the path as needed
import feedReducer from "./feedSlice"; // Adjust the path as needed
import ConnectionReducer from "./connectionSlice";
import requestReducer from "./requestSlice";

const appStore = configureStore({   
    reducer: {
        user: userReducer,
        feed : feedReducer,
        Connections : ConnectionReducer,
        request: requestReducer,
    }
})

export default appStore;