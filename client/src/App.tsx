import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"
import { Route, Routes } from 'react-router-dom';
import { Browse } from "./pages/Browse";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { AddCar } from "./pages/AddCar";
import { Guard } from "./components/Guard"
import GlobalStateProvider from "./components/GlobalStateProvider";

function App() {
  return (
    <main>
      <GlobalStateProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/browse" element={<Guard><Browse /></Guard>} />
          <Route path="/add-car" element={<Guard><AddCar /></Guard>} />
        </Routes>
        <Footer />
      </GlobalStateProvider>
    </main >
  );
}

export default App;
