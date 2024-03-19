import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import MainLayout from "./layout/MainLayout";
import {router} from "./router/index"
import store from "./features/starships/store"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout/>
      </BrowserRouter>
    </Provider>
  //</React.StrictMode>
);
 