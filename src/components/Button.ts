import styled,{css} from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    working?: boolean;
    variant?:string;
    shouldGray?:boolean;
  }
export const Button=styled.button<ButtonProps>`
    background-color: ${props => props.working?props.variant==="CheckBox"?"#27bfda":"#007bff":props.variant==="CheckBox"? "#4EE1AD":"gray" };
    border: none;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    &:hover{
      opacity: .7;
    }
    ${props=>{
      if(props.shouldGray){
        return css`
        background-color:gray;
        `
      }
    }}
  
`

