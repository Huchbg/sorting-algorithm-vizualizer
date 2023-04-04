import {Swap} from"Functions/OtherFunctions/SwapFunc"
import { SetArray } from "Functions/interfaces/SetArrayInterface";
import {SetIndex} from "Functions/interfaces/SetIndexInteface"

export const SelectionSort= async(array: number[], SetFunck: SetArray,SetIndex:SetIndex,SetIndexCompare:SetIndex)=>{
    for(let  i = 0;i<array.length;i++){
        let MinIndex=i
        for(let j = array.length-1;j > i;j--){
            SetIndex(j)
            SetFunck([...array])
            await new Promise((resolve) => setTimeout(resolve, 7)); 
            if(array[j]<array[MinIndex]){
                MinIndex=j
            }
        }
        
        
        Swap(array,i,MinIndex)
    }
    SetFunck([...array])
    SetIndex(-1)
}