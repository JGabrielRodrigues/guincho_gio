import React from "react";
import "./services.css";

export default function Services() {
  const services = [
    {
    
      title: "Guincho Leve",
      description: "Carros de passeio, SUVs e veículos pequenos",
      features: ["Até 2 toneladas", "Equipamento moderno", "Cuidado total", "Fixação segura", "Sem riscos", "Atendimento rápido"]
    },
    {
      
      title: "Guincho Pesado",
      description: "Caminhões, vans e veículos grandes",
      features: ["Acima de 2 toneladas", "Experiência comprovada", "Segurança garantida"]
    },
    {
     
      title: "Socorro Mecânico",
      description: "Assistência mecânica no local da pane",
      features: ["Troca de pneus", "Bateria", "Pequenos reparos"]
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <span className="services-badge">O QUE FAZEMOS</span>
          <h2 className="services-title">Nossos Serviços</h2>
          <p className="services-subtitle">
            Soluções completas para qualquer tipo de emergência automotiva
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="service-feature">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="services-cta">
          <div className="cta-content">
            <h3 className="cta-title">Precisa de atendimento imediato?</h3>
            <p className="cta-text">Estamos disponíveis 24 horas por dia, 7 dias por semana</p>
          </div>
          <a href="tel:11999999999" className="cta-button">
            <svg className="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  );
}