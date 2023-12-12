import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import Postdetails from './components/Postdetails';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Homepage />),
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
