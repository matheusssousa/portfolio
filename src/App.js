import { BrowserRouter } from "react-router-dom";
import Router from "./routes/route";
import './index.css';
import Sidebar from "./components/Sidebar";
import { AnimatePresence } from "framer-motion";

function App() {

  return (
    <BrowserRouter>
      <AnimatePresence mode='wait'>
        <div className="w-full absolute bottom-0 z-20">
          <Sidebar />
        </div>
        <Router />
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
