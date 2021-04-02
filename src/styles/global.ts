import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'),
       url('/fonts/poppins-v15-latin-regular.woff') format('woff');
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('/fonts/poppins-v15-latin-700.woff2') format('woff2'),
       url('/fonts/poppins-v15-latin-700.woff') format('woff');
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:transparent;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color:#03000E;
  }
`

export default GlobalStyles
