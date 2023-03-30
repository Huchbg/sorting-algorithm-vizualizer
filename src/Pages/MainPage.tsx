import { BubleSort } from "../Functions/SortingAlhorithms/BubleSort"
import { useEffect,useState } from "react"
import { MergeSort} from"Functions/SortingAlhorithms/MergeSort"
import {Wraper} from "components/Wraper"
import {WraperOfWraper} from "components/WraperOfWraper"
import { VerticalBer } from "components/Bar"
import {generateArray} from "../Functions/OtherFunctions/GenerateArray"

export const MainPage=()=>{
    const [array,SetFunction]=useState<number[]>([])
    const [index,SetIndex]=useState<number>(-1)
    const [indexCompare,SetIndexCompare]=useState<number>(-1)

    useEffect(()=>{
        const newArr:number[]=generateArray()
        SetFunction([...newArr])
        
    },[])
    
    
    
    
    return (
    <>
        <button onClick={()=>{
            BubleSort(array,SetFunction,SetIndex,SetIndexCompare)
        }}>Sort</button>
        <WraperOfWraper>
            <Wraper>
                {array.map((height,indx)=>{
                    if(index===indx||indexCompare===indx){
                        return <VerticalBer height={height} key={indx} color="red"> </VerticalBer>
                    }else{
                        return <VerticalBer height={height} key={indx} color="white"> </VerticalBer>
                    }
                    
                })}
            </Wraper>
        </WraperOfWraper>
    </>
    )
}