import styled from 'styled-components'


export const StyledContainerPage = styled.section`

    main{

        min-height: 100vh;
        padding-top: 12vh;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        /* justify-content: center; */

        header{
            width: 100%;
            padding-left: 15px;
            h2{
                font-size: var(--font-size-3);
                letter-spacing: 2px;
                color: var(--color-grey-900);
                font-weight: var(--font-weigth-Bold);
                margin-bottom: 20px;
            }
    
            span{
                font-size: var(--font-size-6);
                letter-spacing: 2px;
                color: var(--color-grey-500);
                font-weight: var(--font-weigth-Bold);
            }
        }


        @media(min-width: 1024px){
            flex-direction: column;
            align-items: flex-start;
            width: 1000px; 
            margin: auto;

            header{
            display: flex;
            width: 100%;
            justify-content: space-between;
            }
        }
    }
`