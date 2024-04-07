import Navebar from "./Components/Navbar";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Compose from "./Components/Compose";
import Sentbox from "./Components/Sentbox";
import Inbox from "./Components/Inbox";
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
       },
       {
        path:'/compose',
        element:<Compose></Compose>
       },
       {
        path:"/sentbox",
        element:<Sentbox></Sentbox>
       },
       {
        path:"/inbox",
        element:<Inbox></Inbox>
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
