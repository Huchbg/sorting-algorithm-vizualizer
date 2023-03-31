import { SetArray } from "Functions/interfaces/SetArrayInterface";
import {SetIndex} from "Functions/interfaces/SetIndexInteface"



export const MergeSort=async(array: number[], SetFunck: SetArray,SetIndex:SetIndex,SetIndexCompare:SetIndex)=>{
    
    await mergeSort(array,0,array.length,SetFunck,SetIndex,SetIndexCompare)
    
    for(let i = 0;i < array.length;i++){
        SetIndex(i)
        await new Promise((resolve) => setTimeout(resolve, 5));
    }
    SetIndex(-1)
}
const mergeSort= async(array:number[],indexStart:number,indexEnd:number, SetFunck: SetArray,SetIndex:SetIndex,SetIndexCompare:SetIndex)=>{
    if (indexStart >= indexEnd) {
        return;
      }
   
    const midIndex = Math.floor((indexStart + indexEnd) / 2);
    await  mergeSort(array, indexStart, midIndex,SetFunck,SetIndex,SetIndexCompare);
    await  mergeSort(array, midIndex + 1, indexEnd,SetFunck,SetIndex,SetIndexCompare);
  
    await  merge(array, indexStart, midIndex, indexEnd,SetFunck,SetIndex,SetIndexCompare);

     
   
}

const merge=async(array: number[], indexStart: number, midIndex: number, indexEnd: number,SetFunck: SetArray,SetIndex:SetIndex,SetIndexCompare:SetIndex) => {
    const leftArray = array.slice(indexStart, midIndex + 1);
    const rightArray = array.slice(midIndex + 1, indexEnd + 1);
    let i = indexStart;
    let l = 0;
    let r = 0;
    
    
    
    while (l < leftArray.length && r < rightArray.length) {
        const indexCom=midIndex-(leftArray.length-1-l)
        SetIndexCompare(indexCom)

        SetIndex(midIndex+1+r)
        SetFunck([...array])



        if (leftArray[l] < rightArray[r]) {

            
            await SetFunck([...array])
            await new Promise((resolve) => setTimeout(resolve, 30));
            array[i++] = leftArray[l++];

        } else {

            
            await SetFunck([...array])
            await new Promise((resolve) => setTimeout(resolve, 30));
            array[i++] = rightArray[r++];

        }
      }
    
      while (l < leftArray.length) {
        
        SetIndex(i)
        const indexCom=midIndex-(leftArray.length-1-l)
        SetIndexCompare(indexCom)
        SetFunck([...array])
        await new Promise((resolve) => setTimeout(resolve, 30));
        array[i++] = leftArray[l++];
            
        
        
      }
    
      while (r < rightArray.length) {
        
        SetIndex(i)
        const indexCom=midIndex+r
        SetIndexCompare(indexCom)
        SetFunck([...array])
        await new Promise((resolve) => setTimeout(resolve, 30));
        array[i++] = rightArray[r++];
            
      
      }
      SetIndexCompare(i)
      SetIndex(i)
      SetFunck([...array])
}



