import {configureStore} from "@reduxjs/toolkit";
import {root} from "./RootReducer";

export const store = configureStore({reducer: root});