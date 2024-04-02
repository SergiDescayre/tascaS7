import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import MainLayout from "./layout/MainLayout";
import store from "./features/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(

    <Provider store={store}>
      <BrowserRouter>
        <MainLayout/>
      </BrowserRouter>
    </Provider>

);
 