import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from "../components/Home/Home.jsx"
import Layout from './Layout.jsx'
import About from '../components/About/About.jsx'
import Contact from '../components/Contact/Contact.jsx'
import User from '../components/User/User.jsx'
import GitHub, { getGithubInfo } from '../components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path = "/" element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/> 
      <Route 
        loader={getGithubInfo}
        path="github"
        element={<GitHub/>}
      />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
