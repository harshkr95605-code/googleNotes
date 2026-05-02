
import { configureStore } from "@reduxjs/toolkit"
import  notesReducer  from "./homeSlice"; //default import
export const store = configureStore({
reducer:{
  notesStore : notesReducer //use as common for all components
},
});
