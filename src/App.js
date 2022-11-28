import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import router from './Routes/Route/Route';

function App() {
  return (
    <div className="sm:w-10/12 mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
