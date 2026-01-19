import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background com overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        {/* Logo */}
        <div className="hero-logo">
          <img
            src="/images/logo.png"
            alt="Giovane Guincho Logo"
            className="logo-image"
          />
        </div>

        {/* Conteúdo Principal */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🚨</span>
            <span>ATENDIMENTO 24 HORAS</span>
          </div>

          <h1 className="hero-title">
            Guincho 24h em <span className="highlight">São Paulo</span>
          </h1>

        </div>
      </div>

    </section>
  );
}