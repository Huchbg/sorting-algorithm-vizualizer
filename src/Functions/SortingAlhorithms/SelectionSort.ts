import {Swap} from"Functions/OtherFunctions/SwapFunc"

export const SelectionSort= async(array: number[], SetFunck: any,SetIndex:any,SetIndexCompare:any)=>{
    for(let  i = 0;i<array.length;i++){
        let MinIndex=i
        for(let j = array.length-1;j > i;j--){
            SetIndex(j)
            SetFunck([...array])
            await new Promise((resolve) => setTimeout(resolve, 20)); 
            if(array[j]<array[MinIndex]){
                MinIndex=j
            }
        }
        
        
        Swap(array,i,MinIndex)
    }
    return array
}