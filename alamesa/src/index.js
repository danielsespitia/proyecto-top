import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components'

const theme = {
  primaryColor: '#7741ff',
  secundaryColor: '#0f31dd',
  tertiaryColor: '#ecc30d',
  primaryColorBlur: 'rgba(119, 65, 255, 0.5)',
  grayColorOverlay: '#f2f2f2',
  grayColorMore: '#e0e0e0',
  blueColorSan: 'rgba(86, 204, 242, 0.3)',
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
