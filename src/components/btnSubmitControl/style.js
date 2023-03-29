import styled, {css} from 'styled-components'

export const StyleButton =  styled.button`
    margin-top: 40px;
    display: inline-block;
    padding: 15px 30px;
    color:  var(--color-grey-900);
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: var(--font-size-4);
    overflow: hidden;
    border: none;
    cursor: pointer;

    :hover{
    background: var(--color-primary-focus);
    }


    ${({typeStyle}) => {
        if(typeStyle == 'primary'){
            return css`
                 background-color: var(--color-primary);
                 width: 90%;
                 margin: 40px auto;
            `
        }else if(typeStyle == 'negative'){
            return css`
                width: 93% ;
                 background-color: var(--color-primary-negative);
            `
        }else if(typeStyle == 'dark'){
            return css`
                 background-color: var(--background);
                 /* width: 120px; */
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

    ${({text}) =>{
        if(text == 'X'){
            return css`
                font-size: var(--font-size-4);
                padding: 5px 10px;
                background-color: transparent;
                border: none;
            `
        }else if(text == '+'){
            return css`
                font-size: var(--font-size-4);
                padding: 5px 10px;
                background-color: transparent;
            `
        }
        else if(text == 'Deletar'){
            return css`
                margin-top: 0;
                font-size: var(--font-size-5);
                width: 150px;
                padding: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
            `
        }
    }}
    

`

