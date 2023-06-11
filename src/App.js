import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./components/common/Homepage";
import Header from "./components/layout/Header";
import Viewallbreeds from "./components/common/Viewallbreeds";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "/view_all_breedby_category/:id",
    element: <Viewallbreeds />,
  },
  
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
