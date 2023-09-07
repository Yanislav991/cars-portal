import { Navigation } from "./components/Navigation";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const image = require('./assets/images/main2.jpg');
  return (
    <main>
      <Router>
        <Navigation />
        <section className="main-section">
        </section>
      </Router>
    </main>
  );
}

export default App;
