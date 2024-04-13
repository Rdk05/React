import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Service from "./Page/Service";
import Blog from "./Page/Blog";
import Error from "./Page/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/service" Component={Service} />
        <Route path="/blog" Component={Blog} />
        <Route path="*" Component={Error} />
      </Routes>
    </Router>
  );
}

export default App;
