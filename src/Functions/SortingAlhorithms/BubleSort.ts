import {Swap} from"Functions/OtherFunctions/SwapFunc"

export const BubleSort = async (array: number[], SetFunck: any,SetIndex:any) => {
    
  
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        
        let a = array[j];
        let b = array[j + 1];
        if (a > b) {
          SetIndex(j+1)
          Swap(array, j, j + 1);
          SetFunck([...array]);
          await new Promise((resolve) => setTimeout(resolve, 40)); 
        }
      }
    }
    SetIndex(-1)
  };

   