
import styled from 'styled-components'


export const StyledContainer = styled.section`
    /* width: 500px; */
    width: 340px;
    height: fit-content;
    padding: 40px 10px;
    border-radius: 4px;
    /* border: 1px solid rgb(237, 242, 255, 0.4); */
    background-color:  var(--color-grey-200);

    h2{
        font-size: var(--font-size-2);
        letter-spacing: 4px;
        text-align: center;
    }

    span{
        font-size: var(--font-size-6);
        color: var(--color-grey-500);
        letter-spacing: 4px;
        text-align: center;
        margin: 0 0  40px 0;
    }

    form{
        display: flex;
        flex-direction: column;
    }

    @media(min-width: 1024px){
        padding: 20px;

    }
`

