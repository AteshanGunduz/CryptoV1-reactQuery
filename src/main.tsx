import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MyProvider } from './state/useContext.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { NotFoundPage } from './pages/NotFoundPage.tsx'
import Prices from './components/Prices.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import LoginForm from './pages/LoginForm.tsx'
import Trade from './pages/Trade.tsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  errorElement: <NotFoundPage/>,
  children: [{
    path: "/prices/:crypto",
    element: <Prices/>
  }]
  },
  {
    path: "/login",
    element: <LoginForm/>
  },
  {
    path: "/trade",
    element: <Trade/>
  }
])


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <MyProvider>
      <RouterProvider router={router}/>
    </MyProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
