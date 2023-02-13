import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import { hydrate, render } from "react-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let t = teamsLightTheme;
t.fontFamilyBase = "'Inter', 'Noto Sans Bengali', sans-serif !important";

root.render(
  // <React.StrictMode>
  <FluentProvider theme={t}>
    <App />
  </FluentProvider>
  // </React.StrictMode>
);

// const rootElement = document.getElementById("root") as HTMLElement;
// if (rootElement.hasChildNodes()) {
//   hydrate(<FluentProvider theme={t}><App /></FluentProvider>, rootElement);
// } else {
//   render(<FluentProvider theme={t}><App /></FluentProvider>, rootElement);
// }


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
