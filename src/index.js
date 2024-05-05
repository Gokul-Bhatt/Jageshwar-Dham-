import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client"
import App from "./App"
import {AuthProvider} from "../src/components/Store/auth.js"

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <AuthProvider>
 <App/>
    </AuthProvider>
);

// root.render(<App/>)