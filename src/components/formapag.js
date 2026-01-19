/* eslint-disable no-undef */
import React from "react";
import "./formapag.css";

export default function PaymentSimple() {
  const paymentMethods = [
    {
      id: "pix",
      name: "PIX",
      icon: "/images/logo-pix.png",
      description: "Transferência instantânea"
    },
    {
      id: "credit",
      name: "Cartão de Crédito e Débito",
      icon: "/images/cartao.png",
      description: "Parcelamento disponível"
    },

    {
      id: "cash",
      name: "Dinheiro",
      icon: "/images/dineiro.png",
      description: "Pagamento em espécie"
    }
  ];

  return (
    <section className="payment-simple-section" id="payment">
      <div className="payment-simple-container">
        
        {/* Header */}
        <div className="payment-simple-header">
          <h2 className="payment-simple-title">Formas de Pagamento</h2>
          <p className="payment-simple-subtitle">
            Aceitamos diversas formas para sua comodidade
          </p>
        </div>

        {/* Payment Methods */}
        <div className="payment-simple-grid">
          {paymentMethods.map((method) => (
            <div key={method.id} className="payment-simple-card">
              <div className="payment-simple-icon">
                <img src={method.icon} alt={method.name} />
              </div>
              <h3 className="payment-simple-name">{method.name}</h3>
              <p className="payment-simple-description">{method.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}