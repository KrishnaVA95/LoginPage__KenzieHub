import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components'

export const StyleContainerAnchor =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 30px;
    background-color: var(--color-primary-negative);
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: var(--font-size-4);
    overflow: hidden;
    border: none;
    cursor: pointer;
    width: 90%;
    margin: auto;

    :hover{
        background: var(--color-primary-focus);
    }

    ${({typeStyle}) => {
        if(typeStyle == 'black'){
            return css`
                 background-color: var(--background);
                 width: 100px;
                 border: 1px solid rgb(237, 242, 255, 0.4);
                 border-radius: 4px;
                 margin: 0;
                 font-size: var(--font-size-6);
                 padding:  10px ;

                 :hover{
                     background: var(--color-primary-negative);
                }
            `
        }
    }}
    

    a{
        color: #fff;
    }
    
`


