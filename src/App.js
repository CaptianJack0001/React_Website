import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="Myfirstapp" about="AboutUS" />
      <div className="container">
        <Textform  heading ="convert" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
