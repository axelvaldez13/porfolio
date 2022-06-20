import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing:border-box
  }
  html , body, #__next {
    height: 100%;
    width:100%;
    display:flex;
    flex:1;
  }
  #__next {
    position:relative;
    display: flex;
    flex-direction: row-reverse;

    @media screen and (min-width: 1024px){
      flex-direction: row;
    }
  }

  body {
    color: ${props => props.theme.color.white};
    background: ${props => props.theme.color.primary[900]};
    font: 400 1rem -apple-system, BlinkMacSystemFont, sans-serif;
  }
`
