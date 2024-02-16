import { useState } from "react";

const ContadorCaracteres = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Escribe algo..."
        rows={4}
        cols={50}
      />
      <p>
        Cantidad de caracteres:
        <span
          style={{ fontSize: "3.5rem", fontWeight: "bold", color: "orange" }}>
          {text.length}
        </span>
      </p>
    </div>
  );
};

export default ContadorCaracteres;
