import React from "react";
import NoteList from "./components/NoteList";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <div>
      <h1>Простий сервіс нотаток</h1>
      <NoteList />
      <CookieConsent
        location="bottom"
        buttonText="Прийняти"
        cookieName="userCookieConsent"
        style={{ background: "#222", color: "#fff" }}
        buttonStyle={{ color: "#fff", background: "#f50057", fontSize: "14px" }}
        expires={365}
      >
        Цей сайт використовує cookies для покращення роботи.
      </CookieConsent>
      <footer style={{ marginTop: "20px", textAlign: "center" }}>
        <a href="/PRIVACY_POLICY.md" target="_blank" rel="noopener noreferrer">
          Політика конфіденційності
        </a> | 
        <a href="/EULA.md" target="_blank" rel="noopener noreferrer">
          Угода EULA
        </a>
      </footer>
    </div>
  );
}

export default App;
