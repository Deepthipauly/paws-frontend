import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./components/common/homepage";
import Header from "./components/layout/header";
import Viewallbreeds from "./components/common/viewallbreeds";
import Viewbreed from "./components/common/viewbreed";
import Register from "./components/user/register";
import Login from "./components/user/login";
import Addbreed from "./components/admin/addbreed";
import Editbreed from "./components/admin/editbreed"
import Deletebreed from "./components/admin/deletebreed";
import Addcategory from "./components/admin/addcategory";



const router = createBrowserRouter([
  {
    path: "/",
    element:  <><Header /> <Homepage /></>,
  },
  {
    path: "/view_all_breedby_category/:id",
    element: <><Header /><Viewallbreeds /> </>,
  },
  {
    path:'/view_breed/:breedId',
    element: <><Header /><Viewbreed /></>
  },
  {
    path:'/auth/register',
    element:<><Header /><Register/></>
  },
  {
 path:'/auth/login',
 element: <><Header /><Login/></>
  },

  {
    path:'/admin/add_breed',
    element:<><Header /><Addbreed/></>
  },

  {
    path:'/admin/edit_breed/:breedId',
    element:<><Header /><Editbreed/></>
  },

{
  path:'/admin/delete_breed/:breedId',
  element:<><Header /><Deletebreed/></>
},

{
  path:'/admin/add_category',
  element:<><Header />< Addcategory/></>
}


  
]);

function App() {



  return (

 
      <>
        <RouterProvider router={router} />
      </>
   
  );
}

export default App;
