import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import Update from "./componets/Update";
import Details from "./componets/Details";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <div className="bg-gray-900 w-full h-full py-16 flex items-center justify-center">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="restaurant/:id" element={<Details />} />

            <Route path="restaurant/u/:id" element={<Update />} />
          </Routes>
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
