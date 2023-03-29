import styled from 'styled-components'


export const StyleContainerModal =  styled.div`
    width: 350px;
    height: fit-content;
    /* padding: 15px; */
    /* border: 2px solid; */
    border-radius: 8px;
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
        gap: 40px;
        padding: 15px;

        h5{
            letter-spacing: 2px;
            font-size: var(--font-size-5);
            text-align: center;
            margin-top: 30px;
            margin-bottom: -20px;
        }

        .container__btns{
            display: flex;
            gap: 15px;
            height: 50px;
            align-items: center;
        }
    }

`