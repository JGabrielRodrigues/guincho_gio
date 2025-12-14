import React from "react";
import "./contact.css";

export default function Footer() {
  return (
    <footer className="contact-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h4>GIOVANE <span>GUINCHO</span></h4>
          <p>Serviço de guincho profissional 24 horas</p>
        </div>
        
        <div className="footer-links">
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
          <a href="tel:+5511921986009">Emergência</a>
        </div>
        
        <div className="footer-social">
          <p>© 2024 Giovane Guincho. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
