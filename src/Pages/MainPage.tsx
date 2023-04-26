import { useEffect,useState } from "react"
import {SortingControler}from "Functions/OtherFunctions/SortingController"
import {Wraper} from "components/Wraper"
import {WraperOfWraper} from "components/WraperOfWraper"
import { VerticalBer } from "components/Bar"
import {generateArray} from "../Functions/OtherFunctions/GenerateArray"
import {Button}from"components/Button"
import {MainHeading} from "components/MainHeading"
import {ButtonWraper} from "components/ButtonWraper"
import { MiniButonWraper } from "components/MinniButtonWarper"
import { CheckBox } from "components/CheckBox"
import { Footer } from "components/Footer"
export const MainPage=()=>{
    const [array,SetFunction]=useState<number[]>([])
    const [index,SetIndex]=useState<number>(-1)
    const [indexCompare,SetIndexCompare]=useState<number>(-1)
    const [workingIndexes,SetWorkingIndexes]=useState<number[]>([])
    const [signalSetArray,SetSignalSetArray]=useState<boolean>(false)
    const [canSort,SetConstCanSort]=useState<boolean>(true)
    const [curentlySorting,setCurentlySorting]=useState<boolean>(false)
    const [curentSorrtingAlgorithm,SetCurentSortingAlgorithm]=useState<string>("QuickSort")
    useEffect(()=>{
        const newArr:number[]=generateArray()
        SetFunction([...newArr])
        
    },[signalSetArray])
    
    
    
    
    return (
    <>
        <MainHeading>Sorting Algorithm Visualizer</MainHeading>
            <ButtonWraper>
                HElloWOrld2
               <MiniButonWraper>
               {canSort && !curentlySorting ?<Button working={true} onClick={()=>{
                    setCurentlySorting(true)
                    SortingControler(curentSorrtingAlgorithm,array,SetFunction,SetIndex,SetIndexCompare,SetWorkingIndexes,SetConstCanSort,setCurentlySorting)
                }}>Sort</Button>:<Button working={false}>Sort</Button>}
                {canSort ? <Button working={false}>GenerateNewArray</Button>:<Button onClick={()=>{
                    SetConstCanSort(true)
                    signalSetArray?SetSignalSetArray(false):SetSignalSetArray(true)
                }} working={true}>GenerateNewArray</Button>}
               </MiniButonWraper>
               <MiniButonWraper>
                <CheckBox curentSorrtingAlgorithm={curentSorrtingAlgorithm} SetCurentSortingAlgorithm={SetCurentSortingAlgorithm} canSort={canSort} curentlySorting={curentlySorting} />
               </MiniButonWraper>
        </ButtonWraper>


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
        <Footer curentSorrtingAlgorithm={curentSorrtingAlgorithm} />
    </>
    )
}