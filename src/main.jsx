import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { ResultContextProvider } from "./contexts/ResultProviderContext";
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ResultContextProvider>
            <RouterProvider router={router}/>
        </ResultContextProvider>
    </React.StrictMode>
)