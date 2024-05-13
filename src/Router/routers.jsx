
import Layout from "../Layout/Layout"
import Home from "../pages/ChatBox/Home"

const routers=[
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      }
    ]
  },
]
export default routers