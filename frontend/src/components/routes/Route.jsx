import { createHashRouter, RouterProvider } from 'react-router-dom'  // changed from createBrowserRouter
import Home from '../views/home'
import Addarea from '../views/addarea'
import Addvillage from '../views/addvillage'
import Navbar from '../navbar/Index'
import Login from '../login/Login'
import Showuser from '../views/showuser/Index'
import Printuser from '../views/printdata/Index'
import Adduser from '../views/adduser/Index'

const router = createHashRouter(
  [
    {
      path: "/home",
      element:
        <div>
          <Navbar />
          <Home />
        </div>
    },
    {
      path: "/area",
      element:
        <div>
          <Navbar />
          <Addarea />
        </div>
    },
    {
      path: "/village",
      element:
        <div>
          <Navbar />
          <Addvillage />
        </div>
    },
    {
      path: "/user",
      element:
        <div>
          <Navbar />
          <Adduser />
        </div>
    },
    {
      path: "/showuser",
      element:
        <div>
          <Navbar />
          <Showuser />
        </div>
    },
    {
      path: "/printuser",
      element:
        <div>
          <Navbar />
          <Printuser />
        </div>
    },
    {
      path: "/",
      element:
        <div>
          <Login />
        </div>
    }
  ]
)

const Routerall = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Routerall
