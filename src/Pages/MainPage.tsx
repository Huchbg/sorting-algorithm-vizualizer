import { BubleSort } from "../Functions/SortingAlhorithms/BubleSort"
import { useEffect } from "react"
import {generateArray} from "../Functions/OtherFunctions/GenerateArray"

export const MainPage=()=>{
    const array=generateArray()
    const newarr=BubleSort(array)
   
    return <div>
       
    </div>
}