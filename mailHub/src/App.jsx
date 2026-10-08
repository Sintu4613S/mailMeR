
import './App.css'
import Home from './components/Home';
import Inbox from './components/Inbox'
import Mail from './components/Mail';
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sendmail from './components/Sendmail';
const router = createBrowserRouter([{
  path:"/",
element:<Home/>,
children:[
  {
    path:'/',
    element:<Inbox/>
  },
  {
    path:'/mail/:id',
    element:<Mail/>
  }
]
}
])

function App() {
  
  return (
    <div className=' min-h-screen min-w-screen overflow-hidden bg-[#F8FAFD]'>
    <Navbar/>
    <RouterProvider router={router}/>
    <div className=' w-[30%] absolute bottom-0 right-20'>
      <Sendmail/>
    </div>
    </div>
  )
}

export default App
