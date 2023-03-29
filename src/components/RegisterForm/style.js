
import styled from 'styled-components'


export const StyledContainer = styled.section`
    /* width: 500px; */
    width: 370px;
    height: fit-content;
    padding:  20px 0;

    border-radius: 4px;
    /* border: 1px solid rgb(237, 242, 255, 0.4); */
    background-color:  var(--color-grey-200);

    

    h2{
        font-size: var(--font-size-4);
        font-weight: var(--font-weigth-Bold);
        letter-spacing: 4px;
        text-align: center;
    }

    p{
        font-size: var(--font-size-6);
        color: var(--color-grey-500);
        letter-spacing: 2px;
        margin-top: 20px;
        text-align: center;
    }

    form{
        width: 90%;
        display: flex;
        flex-direction: column;
        margin: auto;

    }



`