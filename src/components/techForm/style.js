import styled from 'styled-components'


export const StyleContainerModal =  styled.div`
    width: 350px;
    height: fit-content;
    box-shadow: var(--shadow);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50vh;
    left: 50vw;
    background-color: var(--color-grey-200);

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* background-color:var(--color-grey-400) ; */
        border-bottom: 1px solid var(--color-primary-negative);
        padding: 15px;
    }


    form{
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 15px;
    }
`