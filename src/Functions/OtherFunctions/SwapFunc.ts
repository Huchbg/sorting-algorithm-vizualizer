export const Swap=(array:number[],a:number,b:number) => {
    let x=array[a]
    array[a]=array[b]
    array[b]=x
    return array
}