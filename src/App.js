import "./scss/App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Homepage/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import DoctorsPage from "./components/Doctors/DoctorsPage.jsx";
import SignIn from "./pages/Auth/SignIn.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="App">
      <SignIn/>
        <Footer />
      </main>
    </>
  );
}

export default App;
