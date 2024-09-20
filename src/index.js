import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./Context/theme";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </StrictMode>
);

