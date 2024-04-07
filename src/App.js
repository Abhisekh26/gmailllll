import Navebar from "./Components/Navbar";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App() {
  var appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Navebar/>,
      children:[
       {
        path:"/login",
        element:<Login></Login>
       },
       {
        path:"/signup",
        element:<Signup></Signup>

       }
      ]
      
    }
  ])
  return (
    <div>
   <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
