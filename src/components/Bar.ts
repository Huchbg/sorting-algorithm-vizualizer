import styled from 'styled-components';
interface MyComponentProps {
    height: number;
    color:string;
  }

export const VerticalBer=styled.div<MyComponentProps>`
    width: 7px;
    background-color: ${props => props.color};

    height: ${props => `${props.height}%`};
`