import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Editor from './pages/editor/Index';

const App: React.FC = () => {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/create" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;