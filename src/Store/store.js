import { configureStore } from "@reduxjs/toolkit";
import User from "../Features/Userslice.js";

export const store=configureStore({
    reducer:{
        users: User,
       
    },
})