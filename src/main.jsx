import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store.js'
import { RouterProvider } from 'react-router-dom'
import {router} from './routes/router.jsx'
import Toasts from './Components/Toasts/Toasts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
    <Toasts/>
  </Provider>
)