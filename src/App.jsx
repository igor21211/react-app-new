import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<CardList />} />
            <Route path="products/:category" element={<CardList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
