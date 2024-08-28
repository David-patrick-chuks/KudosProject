import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import Cars from "./pages/Cars"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import { ToastContainer } from "react-toastify"
import { useContext, useEffect } from "react"
import { GlobalContext } from "./utils/context"

const App = () => {
  const { loggedInUserChecker } = useContext(GlobalContext);

  useEffect(() => {
    loggedInUserChecker();
    console.log('Moti run')
  }, [])
  
  return (
    <div>
    <ToastContainer />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="cars" element={<Cars />} />
        <Route path="login" element={<Login /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App