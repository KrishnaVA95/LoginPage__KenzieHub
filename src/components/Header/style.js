import styled from 'styled-components'

export const StyledContainerHeader = styled.header`
    height: 10vh;
    min-width: 100vw;
    display: flex;
    /* flex-direction: column; */
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: var(--background);
    justify-content: space-around;
    align-items: center;
    /* box-shadow: var(--shadow); */
    border-bottom: 1px solid rgb(237, 242, 255, 0.4);


    @media(min-width: 768px){
        height: 8vh;
        justify-content: space-between;
        padding: 0 50px;
    }

`