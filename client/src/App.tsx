import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"
import { Route, Routes } from 'react-router-dom';
import { Browse } from "./pages/Browse";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

function App() {
  return (
    <main>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </main >
  );
}

export default App;
