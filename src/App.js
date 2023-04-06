import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatHome from "./components/ChatHome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
