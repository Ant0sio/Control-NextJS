import {IMovie} from "@/models/IMovie";
import {IMovieWithDetails} from "@/models/IMovieWithDetails";
import {IBackdrop} from "@/models/IBackdrop";
import {IGenre} from "@/models/IGenre";

const baseUrl=process.env.NEXT_API_URL

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzM4YTlhNDlmY2ZjMDFmYjRlZDkzNTRkYTA2NWMzZCIsIm5iZiI6MTc0NzkyMjE2MS4yMTUwMDAyLCJzdWIiOiI2ODJmMmNmMTVkYjZkMmQ3NmUxYzFmMjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-bbAUG29XxIx_rt9v040iXL-s-4u6Av2LcZFTjsiHG8'}};

export const loadGenresFromApi=async():Promise<IGenre[]>=> {
  const {genres} =await fetch(baseUrl+'/genre/movie/list?language=en', options)
      .then(res => res.json())
    return genres};


export const loadMoviesFromApi =async (id:string,number_page:string):Promise<IMovie[]>=>{
    const{results}=await fetch(`${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}/?&page=${number_page}`, options)
        .then(res => res.json())
    return results};


export const loadSearchMoviesFromApi =async (query:string):Promise<IMovie[]>=>{
    const{results}=await fetch(`${baseUrl}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
        .then(res => res.json())
    return results};


export const loadMovieFromApi=async (id:string):Promise<IMovieWithDetails>=>{
    return await fetch(`${baseUrl}/movie/${id}`, options)
        .then(res => res.json())}


export const loadImagesForMovieFromApi=async (movie_id:number):Promise<IBackdrop[]>=>{
    const{backdrops}=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/${movie_id}/images`, options)
        .then(res => res.json())
    return backdrops}


export const loadSpecialMoviesFromApi=async(path:string):Promise<IMovie[]>=>{
    const{results}=await fetch(`${baseUrl}/movie/${path}?language=en-US&page=1`,options)
        .then(res => res.json())
    return results}



