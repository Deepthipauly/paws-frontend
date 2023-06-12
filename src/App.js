import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./components/common/homepage";
import Header from "./components/layout/header";
import Viewallbreeds from "./components/common/viewallbreeds";
import Viewbreed from "./components/common/viewbreed";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/view_all_breedby_category/:id",
    element: <Viewallbreeds />,
  },
  {
    path:'/view_breed/:breedId',
    element:<Viewbreed />
  }
  
  
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
