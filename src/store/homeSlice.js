import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

export const homeSlice = createSlice({
  name: "home",
  initialState:{    //using components we set these values of url and genres
    url:{},
    genres:{},   //we'll call genres api and store data here
  },
  reducers: {//below are action we created ->getApiConfiguration & getGenres
    getApiConfiguration :(state,action) =>{
        state.url = action.payload; //payload will have value when api called and action is to store that in state.url i.e in url:{} from 6th line
    },
    getGenres:(state,action)=>{
        state.genres= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
