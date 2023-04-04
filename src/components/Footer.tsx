import {FooterHeading } from"components/FooterHeading"

interface Props {
    curentSorrtingAlgorithm: string;
}

export const Footer =(props:Props)=>{
    const CurentOnotarion=(sortingAlg:string)=>{
        let Notation="O(n*logn)"
        if(sortingAlg==="SelectionSort"||sortingAlg==="BubbleSort"){
            Notation="O(n^2)"
        }

        return Notation
    }

    return <FooterHeading>You have selected the {props.curentSorrtingAlgorithm} Algorithm with time complexity of {CurentOnotarion(props.curentSorrtingAlgorithm)} </FooterHeading>
}