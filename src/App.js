import "./scss/App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Homepage/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import DoctorsPage from "./components/Doctors/DoctorsPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="App">
      <Home/>
        <Footer />
      </main>
    </>
  );
}

export default App;
