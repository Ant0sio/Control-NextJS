import {createAsyncThunk} from "@reduxjs/toolkit";
import {loadImagesForMovieFromApi} from "@/services/api.services";


export const loadImages=createAsyncThunk('movieSlice/loadImages',
    async (movie_id:number,thunkAPI)=>{
        try {return thunkAPI.fulfillWithValue(await loadImagesForMovieFromApi(movie_id))
        }catch (e){console.log(e);}
        return []
    });
