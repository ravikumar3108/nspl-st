import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    // JSX Fragments
    <>
      {/* Call the funtion components */}
      {/* Reusable */}
      <Header />
      <Home/>
      
    </>
  );
}

export default App;
