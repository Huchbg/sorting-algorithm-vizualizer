import { BubleSort } from "Functions/SortingAlhorithms/BubleSort"
import { SelectionSort } from "Functions/SortingAlhorithms/SelectionSort"
import { MergeSort} from"Functions/SortingAlhorithms/MergeSort"
import { QuickSort } from "Functions/SortingAlhorithms/QuickSort"
import {SetArray} from "Functions/interfaces/SetArrayInterface"
import {SetIndex as SetIndexIn} from "Functions/interfaces/SetIndexInteface"
import {SetWorkingArray} from "Functions/interfaces/SetWorkingIndexes"

export const SortingControler=async(Type:string,array:number[],SetFunction:SetArray,SetIndex:SetIndexIn,SetIndexCompare:SetIndexIn,SetWorkingIndexes:SetWorkingArray,SetConstCanSort:any,setCurentlySorting:any)=>{
    if(Type==="QuickSort"){
        await QuickSort(array,SetFunction,SetIndex,SetIndexCompare,SetWorkingIndexes)
    }else if(Type==="MergeSort"){
        await MergeSort(array,SetFunction,SetIndex,SetIndexCompare)
    }else if(Type==="SelectionSort"){
        await SelectionSort(array,SetFunction,SetIndex,SetIndexCompare)
    }else if(Type==="BubleSort"){
        await BubleSort(array,SetFunction,SetIndex,SetIndexCompare)
    }
    SetConstCanSort(false)
    setCurentlySorting(false)
}