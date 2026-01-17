import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import Navbar from "./components/layout/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
      <ToastContainer
        pauseOnFocusLoss={false}
        autoClose={3000}
        hideProgressBar={true}
        pauseOnHover={false}
      />
    </>
  );
}

export default App;
