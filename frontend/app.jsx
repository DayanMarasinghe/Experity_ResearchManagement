import React from 'react';
import {render} from 'react-dom';
import { createRoot } from "react-dom/client";
import App from "./Main";

render(<h1>Hello to React</h1>, document.getElementById('app'));
createRoot(document.getElementById('app')).render(<App></App>);