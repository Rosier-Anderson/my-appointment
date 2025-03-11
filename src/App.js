import "./styles/App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Homepage/Home.jsx";


function App() {
  return (
    <>
      <Navbar />
      <main className="App">
        <Home />
      
      </main>
    </>
  );
}

export default App;
