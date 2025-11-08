import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SkodyAiHomepage from "./Components/SkodyAiHomepage/SkodyAiHomepage";
import Policy from "./Components/Policy/Policy";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollContext/ScrollToTop";
import { ScrollProvider } from "./Components/ScrollContext/ScrollContext";
import TermsConditions from "./Components/TermsConditions/TermsConditions";

const App = () => {
  return (
    <Router>
      <ScrollProvider>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="/" element={<SkodyAiHomepage />} />
          <Route path="/term-condition" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </ScrollProvider>
    </Router>
  );
};

export default App;
