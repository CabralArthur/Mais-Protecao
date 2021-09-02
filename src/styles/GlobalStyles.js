import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body > * {
    transition: 0.1s filter linear;
  }
  
  html {
    min-height: 100%;
    background: var(--primary);
    overflow-x: hidden;
    animation: showAll .5s;
  }

  *{
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
    transition: color .2s ease-out;
  }
  
  ul {
    list-style: none;
  }
  
  body{
    background-color: #FFFFFF;
  }

  @keyframes showAll {
    0%{
      opacity: 0;
    }100%{
      opacity: 1;
    }
  }
`