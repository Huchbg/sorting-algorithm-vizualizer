import { Button } from "./Button"
interface Props {
    curentSorrtingAlgorithm: string;
    SetCurentSortingAlgorithm:{(x:string):void};
    canSort:boolean;
    curentlySorting:boolean;
}

export const CheckBox=(props:Props)=>{
    if(props.canSort && !props.curentlySorting) {
        return(
            <>
                {props.curentSorrtingAlgorithm==="QuickSort"?
                <Button variant="CheckBox" onClick={()=>{}} working={false}>QuickSort</Button>:
                <Button variant="CheckBox"onClick={()=>{
                    props.SetCurentSortingAlgorithm("QuickSort")
                }} working={true}>QuickSort</Button>}
        
                {props.curentSorrtingAlgorithm==="MergeSort"?
                    <Button variant="CheckBox" working={false}>MergeSort</Button>:
                    <Button variant="CheckBox" onClick={()=>{
                        props.SetCurentSortingAlgorithm("MergeSort")
                    }}working={true}>MergeSort</Button>
                }
                {
                    props.curentSorrtingAlgorithm==="SelectionSort"?
                    <Button variant="CheckBox" working={false}>SelectionSort</Button>:
                    <Button variant="CheckBox" onClick={()=>{
                        props.SetCurentSortingAlgorithm("SelectionSort")
                    }}working={true}>SelectionSort</Button>
                }
                {   props.curentSorrtingAlgorithm==="BubbleSort"?
                    <Button variant="CheckBox" working={false}>BubbleSort</Button>:
                    <Button variant="CheckBox" onClick={()=>{
                        props.SetCurentSortingAlgorithm("BubbleSort")
                    }}working={true}>BubbleSort</Button>
                }
            </>
            )
    }
    return(
    <>
        {props.curentSorrtingAlgorithm==="QuickSort"?
        <Button variant="CheckBox" working={false}>QuickSort</Button>:
        <Button variant="CheckBox" working={true} shouldGray={true}>QuickSort</Button>}

        {props.curentSorrtingAlgorithm==="MergeSort"?
            <Button variant="CheckBox" working={false}>MergeSort</Button>:
            <Button variant="CheckBox" working={true} shouldGray={true}>MergeSort</Button>
        }
        {
            props.curentSorrtingAlgorithm==="SelectionSort"?
            <Button variant="CheckBox" working={false}>SelectionSort</Button>:
            <Button variant="CheckBox" working={true} shouldGray={true}>SelectionSort</Button>
        }
        {   props.curentSorrtingAlgorithm==="BubbleSort"?
            <Button variant="CheckBox" working={false}>BubbleSort</Button>:
            <Button variant="CheckBox" working={true} shouldGray={true}>BubbleSort</Button>

        }
    </>
    )
}