
export const BubleSort=(array:number[])=>{
    for(let i =0 ;i<array.length-1;i++){
        for(let j =0;j<array.length-i-1;j++){
            let a=array[j]
            let b=array[j+1]
            if(a>b){
                swap(array,j,j+1)
            }
        }
    }
    
    return array
}   

const swap=(array:number[],a:number,b:number) => {
    let x=array[a]
    array[a]=array[b]
    array[b]=x
}   