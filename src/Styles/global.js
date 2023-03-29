import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: none;
  outline: none;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; 
  list-style: none;
  text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root{

  --background: #031321;
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    
    --color-secundary: rgb(242, 84, 113,0.5) ;


    --color-grey-50: #0A0C0d;
    --color-grey-100: #191C1F;
    --color-grey-200: #212529;
    --color-grey-300: #343A40;
    --color-grey-400: #495057;
    --color-grey-500: #868E96;
    --color-grey-600: #ADB5BD;
    --color-grey-700: #CED4DA;
    --color-grey-800: #DEE2E6;
    --color-grey-900: #EDF2FF;
    --color-grey-1000: #F8F9FA;

  

    
    --shadow: 0 0 10px #212529, 0 0 40px #343A40, 0 0 80px  #868E96 ;

    --color-greyOpacity-1: rgb(255,255,255,0.05);
    --color-like: #D7443E;

    --font-weight-Light: 300;
    --font-weight-medium: 500;
    --font-weigth-SemiBold: 600;
    --font-weigth-Bold: 700;

    --radius-1: 8px;
    --radius-2: 6px;
    --radius-3: 4px;

    --font-size-0: 3rem;
    --font-size-1: 2rem;
    --font-size-2: 1.75rem;
    --font-size-3: 1.5rem;
    --font-size-4: 1.25rem;
    --font-size-5: 1rem;
    --font-size-6: 0.75rem;

    --line-height: 150%;
}


body {
    background: var(--background);
    color: var(--color-grey-900);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    height: 160vh;
    width: 100vw;


  }

  main{
    padding-top: 10vh;
    max-width: 1330px;
    margin: auto;
  }

  .container__shopping--user > main{
    display: flex;
    flex-direction: column;


  }

  @media(min-width: 1024px){
    .container__shopping--user > main{
      flex-direction: row;
      justify-content: space-between;
    }
  }
`
export default GlobalStyle