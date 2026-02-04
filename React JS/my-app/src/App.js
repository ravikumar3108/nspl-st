import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    // JSX Fragments
    <>
      {/* Call the funtion components */}
      {/* Reusable */}
      <Header />
      <Header />
      <Header />
      <h1>Heloo</h1>
      <Header />
      <Header />
    </>
  );
}

export default App;
