import styled from 'styled-components'


export const StyleFieldset =  styled.fieldset`
    position: relative;
    margin: 40px 0 0 0;

    select{
    width: 98%;
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
    color:  #EDF2FF;
    
    }

    label{
    position: absolute;
    left: 10px;
    bottom: 8px;
    color:  #868E96;
    font-size: 1rem;
    cursor: inherit;

    transition: 0.3s;
    }

    select:focus ~ label,
    select:valid ~ label{
    transform: translateY(-24px);
    font-size:0.8rem;
    letter-spacing: 1px;
    color:  #868E96;
    text-transform: uppercase;
    }
    
    option{
        background-color:  #495057;
    }

    span{
        text-transform: uppercase;
        font-size: var(--font-size-6);
        color: var(--color-primary-focus);
    }
`