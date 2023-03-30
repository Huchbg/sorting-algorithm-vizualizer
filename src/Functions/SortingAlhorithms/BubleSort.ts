import {Swap} from"Functions/OtherFunctions/SwapFunc"

export const BubleSort = async (array: number[], SetFunck: any,SetIndex:any,SetIndexCompare:any) => {
    
  
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
          SetIndex(j)
          SetFunck([...array]);
          await new Promise((resolve) => setTimeout(resolve, 7)); 
        let a = array[j];
        let b = array[j + 1];
        if (a > b) {
          Swap(array, j, j + 1);
        }
      }
    }
    for(let i = 0;i < array.length;i++){
      SetIndex(i)
      await new Promise((resolve) => setTimeout(resolve, 5));
    }
    
    SetIndex(-1)
   
  };

   