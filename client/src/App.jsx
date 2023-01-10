import AddBooks from "./components/AddBooks";
import AllBooks from "./components/AllBooks";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UpdateBook from "./components/UpdateBook";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/all" element={<AllBooks/>} />
        <Route path="/add" element={<AddBooks/>} />
        <Route path="/edit/:id" element={<UpdateBook/>} />
      </Routes>
    </Router>
  )
}

export default App;