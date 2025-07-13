export const shortArray=<T,>(arr:T[])=>{

    const newArray =[] as T[] ;

    arr.map(item=>{
        if (newArray.length<8){newArray.push(item)}})
    return newArray
};