import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {RouterProvider} from "react-router-dom"
import routers from './routers/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers}>
  </RouterProvider>
)
