import { Routes, Route, useLocation } from "react-router-dom";
import Inicio from "./components/inicio.jsx";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const location = useLocation();

  return (
  // <Routes>
  //   <div className="App">
      
  //       <Route path="/" element={Inicio} />
      
  //   </div>
  //   </Routes>
  <Inicio></Inicio>
  );
}

export default App;
