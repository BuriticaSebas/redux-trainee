import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home'

function App() {

  const router = createBrowserRouter([
    { path: '/',
      element: <MainLayout/> ,
      children: [
        {path: "/" , element: <Home/>},
      ]
    }
  ])

 
  return (
    <>
      
        <RouterProvider  router={router}> </RouterProvider>
    </>
  )
}

export default App
