import { createBrowserRouter, RouterProvider } from "react-router"
import About from "./pages/About"
import Home from "./pages/Home"
import { Contact } from "./pages/Contact"

import RootLayout from "./components/RootLayout"
import { DataShow } from "./pages/DataShow"
import ItemList from "./pages/ItemList"
import ItemDetail from "./pages/ItemDetail"





export const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
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
        {
          path: 'datashow',
          element: <DataShow />
        },
        {
          path: 'categories-items/:label',
          element: <ItemList />,
        },
        {
          path: 'item-detail/:id',
          element: <ItemDetail />,
        }
      ]
    },

  ])
  return (
    <RouterProvider router={router} />

  )


}

export default App