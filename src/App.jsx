import { createBrowserRouter, RouterProvider } from "react-router"
import About from "./pages/About"
import Home from "./pages/Home"
import { Contact } from "./pages/Contact"
import Navbar from "./components/Navbar"

export const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    },
  ])
  return (
    <RouterProvider router={router} />

  )


}

export default App