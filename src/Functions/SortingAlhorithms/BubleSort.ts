
export const BubleSort=(array:number[])=>{
    for(let i =0 ;i<array.length;i++){
        for(let j =0;j<array.length-i-1;j++){
            let a=array[i]
            let b=array[i+1]
            if(a>b){
                swap(array,i,i+1)
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