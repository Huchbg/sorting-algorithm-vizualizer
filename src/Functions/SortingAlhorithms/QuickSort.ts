import { SetArray } from "Functions/interfaces/SetArrayInterface";
import {SetIndex} from "Functions/interfaces/SetIndexInteface"
import { Swap } from "Functions/OtherFunctions/SwapFunc";
import  { SetWorkingArray } from "Functions/interfaces/SetWorkingIndexes"

export const QuickSort=async(array: number[], SetFunck: SetArray,SetIndex:SetIndex,SetIndexCompare:SetIndex,SetWorkingIndexes:SetWorkingArray)=>{
   await quickSort(array,0,array.length-1,SetFunck,SetIndex,SetIndexCompare,SetWorkingIndexes)
   
}

const quickSort = async (
    array: number[],
    indexStart: number ,
    indexEnd: number ,
    SetFunck: SetArray,
    SetIndex: SetIndex,
    SetIndexCompare: SetIndex,
    SetWorkingIndexes:SetWorkingArray
  ): Promise<void> => {
    if (indexStart >= indexEnd) {
      return;
    }
    let pivot:any = await partition(
      array,
      indexStart,
      indexEnd,
      SetFunck,
      SetIndex,
      SetIndexCompare,
      SetWorkingIndexes
    );
   
       await quickSort(array, indexStart, pivot - 1, SetFunck, SetIndex, SetIndexCompare,SetWorkingIndexes)
       await quickSort(array, pivot + 1, indexEnd, SetFunck, SetIndex, SetIndexCompare,SetWorkingIndexes)
    

    SetIndex(-1)
    SetIndexCompare(-1)
  };
  
   const partition = async (
    array: number[],
    indexStart: number,
    indexEnd: number,
    SetFunck: SetArray,
    SetIndex: SetIndex,
    SetIndexCompare: SetIndex,
    SetWorkingIndexes:SetWorkingArray
)=> {
    const pivot =array[indexEnd]
    let i =indexStart-1
    SetWorkingIndexes([indexStart,indexEnd])
    for(let j=indexStart;j<=indexEnd-1;j++){

        
        SetWorkingIndexes([j,indexEnd+1])
        
        //SetIndex(i)
        SetIndexCompare(j)
        if(array[j]<pivot){
            i++
            SetIndex(i)
            SetIndexCompare(j)
            Swap(array,i,j)
            SetFunck([...array])
            
        }
        await new Promise((resolve) => setTimeout(resolve, 30));
    }
    i++
    Swap(array,i,indexEnd)
    SetFunck([...array])
    SetIndex(i)
    SetIndexCompare(indexEnd)
    SetWorkingIndexes([-1,-1])
    await new Promise((resolve) => setTimeout(resolve, 30));
    return i
};