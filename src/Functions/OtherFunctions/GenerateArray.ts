export const generateArray=()=>{
    const array: number[]=[]
    for(let i = 0 ; i<100;i++){
        const ranNumber:number=Math.floor(Math.random() * (100 - 5 + 1)) + 5;
        array.push(ranNumber)
    }
    return array
}