import "./App.css";
import ContadorCaracteres from "./components/ContadorCaracteres";

function App() {
  return (
    <>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Contador de caracteres en un área de texto <br /> utilizando React
      </h1>
      <ContadorCaracteres />
    </>
  );
}

export default App;
