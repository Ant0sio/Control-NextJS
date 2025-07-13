import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {IImagesResponse} from "@/models/IImagesResponse";
import {loadImages} from "@/redux/asyncThunks/loadImages";
import {IBackdrop} from "@/models/IBackdrop";

type moviesSliceType={
    imagesResponse:IImagesResponse;
    };


const initialStateMovie:moviesSliceType={
    imagesResponse:{
        "backdrops": [
            {
                "aspect_ratio": 0,
                "height": 0,
                "iso_639_1": null,
                "file_path": " ",
                "vote_average": 0,
                "vote_count": 0,
                "width": 0
            }],
        "id": 0,
        "logos": [],
        "posters": [
            {
                "aspect_ratio": 0,
                "height": 0,
                "iso_639_1": " ",
                "file_path": " ",
                "vote_average": 0,
                "vote_count": 0,
                "width": 0
            }
        ]
    }};


export const imagesSlice=createSlice({
    name: 'imagesSlice',
    initialState: initialStateMovie,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadImages.fulfilled, (state, action: PayloadAction<IBackdrop[]>) => {
            state.imagesResponse.backdrops = action.payload
        })
        .addCase(loadImages.rejected, (state, action) => {
            console.log(state);
            console.log(action);
        })})


    export const imagesSliceActions = {
        ...imagesSlice.actions,loadImages,
    }


