import styled from 'styled-components'


export const StyleContainerShowcase =  styled.section`

    width: 100%;

    header{
        display: flex;
        justify-content: space-between;
        padding: 15px 15px;
        align-items: center;

        h3{
            letter-spacing: 2px;
            font-size: var(--font-size-5);
            color: var(--color-grey-900);
        }
    }

    ul{
        height: fit-content;
        padding: 15px;
        background-color: var(--color-grey-200);
        display: flex;
        flex-direction: column;
        gap: 15px;

        h2{
            letter-spacing: 2px;
            font-size: var(--font-size-3);
            color: var(--color-grey-900);
            text-align: center;
        }

        li{
            display: flex;
            justify-content: space-between;
            height: 30px;
            align-items: center;
            background-color: var(--background);
            border-radius: 4px;
            padding: 20px;

            cursor: pointer;

            div{
                display: flex;
                gap: 5px;
            }
        }

        li:hover{
            background-color: var(--color-grey-400);
        }
    }

`