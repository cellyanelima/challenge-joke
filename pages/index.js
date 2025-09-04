import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState(
    "Click the button... if you dare 😈 (Clique no botão... se tiver coragem 😈)"
  );
  const [clickCount, setClickCount] = useState(0);

  const phrases = [
    "Ouch! Don't press me like that! (Ai! Não me aperta assim!)",
    "You clicked? Really?! 😂 (Você clicou? Jura mesmo?! 😂)",
    "I was just chilling here 😭 (Eu estava quieto aqui 😭)",
    "One more click and I'll disappear!!! (Mais um clique e eu vou embora!!!)",
    "Okay, you win! 🤣 (Tá bom, você venceu! 🤣)",
  ];

  function changeMessage() {
    // se já clicou 5 vezes, não faz mais nada
    if (clickCount >= phrases.length) {
      setMessage("Game over! 😵 (Fim do jogo! 😵)");
      return;
    }

    setMessage(phrases[clickCount]); 
    setClickCount(clickCount + 1);   
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message}</h1>
      <button
        onClick={changeMessage}
        disabled={clickCount > phrases.length} 
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: clickCount > phrases.length ? "not-allowed" : "pointer",
          borderRadius: "8px",
          backgroundColor: clickCount > phrases.length ? "gray" : "#0070f3",
          color: "#fff",
          border: "none",
          marginTop: "20px",
        }}
      >
        Click here
      </button>
    </div>
  );
}
