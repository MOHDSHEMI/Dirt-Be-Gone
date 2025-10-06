import React from "react";
import "./PricingPage.css";

const PricingPage = () => {
  // ✅ Smooth scroll function
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="pricing-wrapper" id="pricing">
      {/* Header */}
      <div className="pricing-header">
        <h1>Bin Cleaning Pricing</h1>
        <p>
          Affordable and professional bin cleaning services tailored to your
          needs.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="pricing-grid">
        {/* One-Off Cleaning */}
        <div className="pricing-card styled">
          <div className="card-header">
            <h2>One-Off Cleaning</h2>
            <p className="tagline">Quick & flexible cleaning option</p>
          </div>
          <ul>
            <li>
              <span>🗑️ 1 Bin</span> <span>£8</span>
            </li>
            <li>
              <span>🗑️ 2 Bins</span> <span>£16</span>
            </li>
            <li>
              <span>🗑️ 3 Bins</span> <span>£18</span>
            </li>
            <li>
              <span>🥡 Food Caddy</span> <span>£2</span>
            </li>
          </ul>
          {/* ✅ Scrolls to Contact form */}
          <button
            className="cta-btn"
            onClick={() => scrollTo("contact")}
          >
            Book Now
          </button>
        </div>

        {/* Monthly Plan */}
        <div className="pricing-card highlight">
          <div className="popular-badge">Popular</div>
          <div className="card-header">
            <h2>Monthly Plan</h2>
            <p className="tagline">Hassle-free freshness every month</p>
          </div>
          <div className="plan-price">
            <p className="plan-label">All Bins</p>
            <p className="plan-amount">£15</p>
          </div>
          <p className="plan-desc">
            Keep your bins fresh and hygienic with our monthly plan.
          </p>
          {/* ✅ Scrolls to Contact form */}
          <button
            className="cta-btn light"
            onClick={() => scrollTo("contact")}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
