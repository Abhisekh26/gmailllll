import Navebar from "./Components/Navbar";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Compose from "./Components/Compose";
import Sentbox from "./Components/Sentbox";
import { useEffect } from "react";
import Inbox from "./Components/Inbox";
import { useDispatch, useSelector } from "react-redux";
import { fetchData,sendRequest } from "./Data/Apistore";
function App() {
  const dispatch=useDispatch()
  const items = useSelector((state) => state.emailState.items);
  const change=useSelector((state)=>state.emailState.changed)
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

  useEffect(() => {
   
    if (change) {
      dispatch(sendRequest(items));
    }
  }, [items, dispatch]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  return (
    <div>
   <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
