import {configureStore} from "@reduxjs/toolkit";
import {imagesSlice} from "@/redux/slices/imagesSlice";



export const store=configureStore({
    reducer:{
        imagesSlice:imagesSlice.reducer,
    }
})