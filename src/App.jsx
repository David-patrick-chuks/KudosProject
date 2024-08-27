import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import Cars from "./pages/Cars"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="cars" element={<Cars />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App