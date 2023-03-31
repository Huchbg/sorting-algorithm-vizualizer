import { useEffect,useState } from "react"
import { BubleSort } from "../Functions/SortingAlhorithms/BubleSort"
import { SelectionSort } from "Functions/SortingAlhorithms/SelectionSort"
import { MergeSort} from"Functions/SortingAlhorithms/MergeSort"
import { QuickSort } from "Functions/SortingAlhorithms/QuickSort"
import {Wraper} from "components/Wraper"
import {WraperOfWraper} from "components/WraperOfWraper"
import { VerticalBer } from "components/Bar"
import {generateArray} from "../Functions/OtherFunctions/GenerateArray"

export const MainPage=()=>{
    const [array,SetFunction]=useState<number[]>([])
    const [index,SetIndex]=useState<number>(-1)
    const [indexCompare,SetIndexCompare]=useState<number>(-1)
    const [workingIndexes,SetWorkingIndexes]=useState<number[]>([])
    const [signalSetArray,SetSignalSetArray]=useState<boolean>(false)

    useEffect(()=>{
        const newArr:number[]=generateArray()
        SetFunction([...newArr])
        
    },[signalSetArray])
    
    
    
    
    return (
    <>
        <button onClick={()=>{
            QuickSort(array,SetFunction,SetIndex,SetIndexCompare,SetWorkingIndexes)
        }}>Sort</button>
        <button onClick={()=>{
            signalSetArray?SetSignalSetArray(false):SetSignalSetArray(true)
        }}>GenerateNewArray</button>
        <WraperOfWraper>
            <Wraper>
                {array.map((height,indx)=>{
                    let color="white"
                    if(indx>workingIndexes[0]&&indx<workingIndexes[1]){
                        color="#D96200"
                        
                        
                    }else if(index===indx||indexCompare===indx){
                        color = "red"
                    }
                    return <VerticalBer height={height} key={indx} color={color}> </VerticalBer>
                    
                })}
            </Wraper>
        </WraperOfWraper>
    </>
    )
}