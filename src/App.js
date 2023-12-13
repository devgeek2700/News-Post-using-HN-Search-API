import './App.css';
import Postdetails from './components/Postdetails';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hometemp from './Hometemp';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Hometemp />),
  },
  {
    path: "/post/:objectID",
    element: (<Postdetails />),
  },
]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
