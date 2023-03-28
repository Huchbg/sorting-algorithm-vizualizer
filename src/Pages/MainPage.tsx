import * as React from 'react';
import { BubleSort } from "../Functions/SortingAlhorithms/BubleSort"
import { useEffect,useState } from "react"
import {Wraper} from "components/Wraper"
import {WraperOfWraper} from "components/WraperOfWraper"
import { VerticalBer } from "components/Bar"
import {generateArray} from "../Functions/OtherFunctions/GenerateArray"

export const MainPage=()=>{
    const [array,SetFunction]=useState<number[]>([])
    const [index,SetIndex]=useState<number>(0)

    useEffect(()=>{
        const newArr:number[]=generateArray()
        SetFunction([...newArr])
        
    },[])
    
    
    
    
    return (
    <>
        <button onClick={()=>{
            BubleSort(array,SetFunction,SetIndex)
        }}>Sort</button>
        <WraperOfWraper>
            <Wraper>
                {array.map((height,indx)=>{
                    if(index===indx){
                        return <VerticalBer height={height} key={indx} color="red"> </VerticalBer>
                    }else{
                        return <VerticalBer height={height} key={indx} color="#34d2eb"> </VerticalBer>
                    }
                    
                })}
            </Wraper>
        </WraperOfWraper>
    </>
    )
}