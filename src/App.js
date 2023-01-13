import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/Routers";
import ProductContextProvider from "./context/ProductContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
    <UserProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </ProductContextProvider>
    </UserProvider>

      <ToastContainer
        position={"top-center"}
        autoClose={2000}
        theme={"colored"}
      />
    </>
  );
}

export default App;
