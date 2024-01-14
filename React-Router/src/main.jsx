import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home'
import About from './components/About/About.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Contact from './components/Contact-us/Contact.jsx'
import Github, { githubLoader } from './components/Github/Github.jsx'
import User from './components/Users/Users.jsx'
 const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element= {<App/>}>
          <Route path='' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/:hello/:id' element={<User/>} />
          <Route path='/Github' element={<Github/>} 
           loader={githubLoader}
          />
        </Route>
    
      )
 )
    //  const router = createBrowserRouter(
  // [
//   {

//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/Contact",
//         element: <Contact />
//       },
//       {
//         loader: { githubLoader },
//         path: "/github ",
//         element: <Github />
//       }
//     ]
//   }

// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
