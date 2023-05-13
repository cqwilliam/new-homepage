import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <div className="todos">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
