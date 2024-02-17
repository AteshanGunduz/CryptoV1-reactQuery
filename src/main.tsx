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
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import SignInForm from './pages/SignInForm.tsx'
import ProfileManager from './pages/ProfileManager.tsx'
import ProfileRight from './components/ProfileRight.tsx'
import AccountDetails from './components/AccountDetails.tsx'
import Deposit from './components/Deposit.tsx'
import Security from './components/Security.tsx'
import Swap from './components/Swap.tsx'
import Withdraw from './components/Withdraw.tsx'
import Settings from './components/Settings.tsx'

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
    path: "/signin",
    element: <SignInForm/>
  },
  {
    path: "/trade",
    element: <Trade/>
  },
  {
    path: "/profilemanager",
    element: <ProfileManager/>,
    children: [{
      index: true, 
      element: <ProfileRight/>
    },
    {
      path: "account-details",
      element: <AccountDetails/>
    },
    {
      path: "deposit",
      element: <Deposit/>
    },
    {
      path: "security",
      element: <Security/>
    },
    {
      path: "swap",
      element: <Swap/>
    },
    {
      path: "withdrawal",
      element: <Withdraw/>
    },
    {
      path: "settings",
      element: <Settings/>
    },
       ]
  },
])


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
     <MyProvider>
      <RouterProvider router={router}/>
    </MyProvider>
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
