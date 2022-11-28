import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
