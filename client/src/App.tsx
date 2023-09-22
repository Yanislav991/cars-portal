import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </main >
  );
}

export default App;
