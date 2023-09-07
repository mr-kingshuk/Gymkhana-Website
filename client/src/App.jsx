import { Routes, Route } from 'react-router-dom';

//components and pages
import Home from "./Components/Pages/Home/Home";
import Navbar from "./Components/Components/Navbar/Navbar";
import Footer from "./Components/Components/Footer/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path = '/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
