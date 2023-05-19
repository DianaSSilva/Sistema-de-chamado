import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";

import AuthProvaider from './contexts/auth'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvaider>
        <ToastContainer autoClose={3000} />
        <RoutesApp />
      </AuthProvaider>
    </BrowserRouter>
  );
}

export default App;
