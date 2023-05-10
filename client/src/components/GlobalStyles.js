import {createGlobalStyle} from 'styled-components'


const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    max-width: 100vw;
    background-color: black;
}
a{
    text-decoration: none;
}
li{
    text-decoration: none;
    list-style: none;
}
h1 ,h2, h3, h4, h4, h6, p , span{
    margin: 0;
    padding: 0;
    color: #D6E5FA;
    /* color: #000; */
    
}

`

export default GlobalStyles