import { configureStore } from "@reduxjs/toolkit";
import DetailsSlice from "./components/features/Details/DetailsSlice";



const store = configureStore({
    reducer: {
        details: DetailsSlice
    }
})


export default store