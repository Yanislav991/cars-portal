import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"
import { Route, Routes } from 'react-router-dom';
import { Browse } from "./pages/Browse";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import GlobalStateProvider from "./components/GlobalStateProvider";

function App() {
  return (
    <main>
      <GlobalStateProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </GlobalStateProvider>
    </main >
  );
}

export default App;
