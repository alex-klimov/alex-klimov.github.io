import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import SkodyAiHomepage from './Components/SkodyAiHomepage/SkodyAiHomepage';
import Policy from './Components/Policy/Policy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SkodyAiHomepage />} />
        <Route path="/#product" element={<SkodyAiHomepage />} />
        <Route path="/#why" element={<SkodyAiHomepage />} />
        <Route path="/#impact" element={<SkodyAiHomepage />} />
        <Route path="/#demo" element={<SkodyAiHomepage />} />
        <Route path="/privacy-policy" element={<Policy />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
