import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = () => {
    if (!formData.name || !formData.phone || !formData.location) {
      alert("Por favor, preencha nome, telefone e localização");
      return;
    }

    const message = `*Solicitação de Guincho - Giovane*

📋 *Dados do Cliente:*
👤 Nome: ${formData.name}
📞 Telefone: ${formData.phone}
📍 Localização: ${formData.location}
${formData.service ? `🚗 Serviço: ${formData.service}` : ''}
${formData.message ? `💬 Observações: ${formData.message}` : ''}

_Aguardo retorno!_`;

    const whatsappUrl = `https://wa.me/5511921986009?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <span className="contact-badge">FALE CONOSCO</span>
          <h2 className="contact-title">Entre em Contato</h2>
          <p className="contact-subtitle">
            Precisa de guincho agora? Estamos prontos para atender você 24 horas por dia
          </p>
        </div>

        <div className="contact-content">
          
          {/* Formulário de Contato */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); handleWhatsAppSubmit(); }}>
              <div className="form-group">
                <label htmlFor="name">Nome *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Localização *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Ex: Avenida Paulista, 1000"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Tipo de Serviço</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Guincho Puro">Guincho Puro</option>
                  <option value="Guincho com Acionamento">Guincho com Acionamento</option>
                  <option value="Reboque">Reboque</option>
                  <option value="Transporte">Transporte</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Observações</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Descreva o problema ou situação..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
              </div>

              <button type="button" className="submit-button" onClick={handleWhatsAppSubmit}>
                <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Enviar via WhatsApp
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="contact-info">
            <div className="info-card emergency">
              <div className="info-header">
                <span className="emergency-badge">EMERGÊNCIA</span>
                <h3>Ligue Agora</h3>
              </div>
              <a href="tel:+5511921986009" className="phone-link">
                (11) 92198-6009
              </a>
              <p className="info-description">
                Atendimento imediato para emergências
              </p>
            </div>

            <div className="info-card whatsapp-card">
              <div className="info-icon whatsapp-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3>WhatsApp</h3>
              <a href="https://wa.me/5511921986009" className="whatsapp-link">
                Enviar Mensagem
              </a>
              <p className="info-description">
                Resposta rápida pelo WhatsApp
              </p>
            </div>

            <div className="info-card instagram-card">
              <div className="info-icon instagram-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3>Instagram</h3>
              <a 
                href="https://www.instagram.com/giovane_guincho_24h_?igsh=em95c2VmbG82OGt5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="instagram-link"
              >
                @giovaneguincho
              </a>
              <p className="info-description">
                Acompanhe nossos trabalhos
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3>Cobertura</h3>
              <p className="highlight-text">São Paulo - SP</p>
              <p className="info-description">
                Região metropolitana
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}