import styled,{css} from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    working?: boolean;
  }
export const Button=styled.button<ButtonProps>`
    background-color: ${props => props.working?"#007bff":"gray" };
    border: none;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    &:hover{
      opacity: .7;
    }

`