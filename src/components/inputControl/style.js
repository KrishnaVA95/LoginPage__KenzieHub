import styled, { css } from 'styled-components'

export const StyleFieldset =  styled.fieldset`
    position: relative;
    margin: 50px 0 0 0;
 

    input{
    width: 95%;
    resize: none;
    /*O elemento não oferece nenhum método controlável pelo usuário para redimensioná-lo.*/
    padding: 8px 0;
    border: none;
    outline: none;
    /* border-bottom: 1px solid var(--color-grey-900); */
    border-bottom: 1px solid var(--color-grey-500);
    background: transparent;
    /* font-size: var(--font-size-5); */
    font-size: 1rem;
    font-weight: 300;
    padding-left: 10px;
    z-index: 100;
    /* color: var(--color-grey-900); */
    color:  #EDF2FF;
    }

    label{
    position: absolute;
    left: 10px;
    bottom: 8px;
    /* color: var(--color-grey-500); */
    color: #868E96 ;
    /* font-size: var(--font-size-5); */
    font-size: 1rem;
    cursor: inherit;

    transition: 0.3s;
    }

    input:focus ~ label,
    input:valid ~ label
    {
    transform: translateY(-24px);
    font-size: 0.8rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    }

    span{
        position: absolute;
        left: 10px;
        text-transform: uppercase;
        font-size: var(--font-size-6);
        color: var(--color-primary-focus);

        ${({origin}) =>{
            if(origin == 'loginPage'){
                return css`
                    bottom: -60px;
                `
            }else{
                return css`
                    bottom: -15px; 
                `
            }
        }}
    }
`

