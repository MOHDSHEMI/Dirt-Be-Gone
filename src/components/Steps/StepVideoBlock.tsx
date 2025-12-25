import { FC } from "react";
import { Row, Col } from "antd";
import {
  SectionWrapper,
  SectionTitle,
  SectionDescription,
} from "./styles";

interface StepVideoBlockProps {
  title: string;
  content: string;
  steps: {
    step: string;
    title: string;
    src: string;
  }[];
  id?: string;
}

const StepVideoBlock: FC<StepVideoBlockProps> = ({
  title,
  content,
  steps,
  id,
}) => {
  const phoneNumber = "+447722045308";

  // Service data with images and descriptions
  const services = [
    {
      title: "Window Cleaning",
      description: "Professional window cleaning services delivering crystal-clear, streak-free results. We clean all types of windows for homes and businesses, ensuring spotless glass inside and out with eco-friendly solutions.",
      image: "/img/svg/man-doing-professional-home-cleaning-service.jpg",
    },
    {
      title: "Patio Cleaning",
      description: "Expert patio cleaning using high-pressure washing to restore patios, driveways, and decking. Our powerful pressure wash removes stubborn dirt, moss, algae, and grime, bringing your outdoor spaces back to life.",
      image: "img/svg/person-wearing-yellow-rubber-boots-with-high-pressure-water-nozzle-cleaning-dirt-tiles.jpg",
    },
  ];

  return (
    <SectionWrapper id={id || "steps"}>
      <SectionTitle>Other Services</SectionTitle>
      <SectionDescription>
        Based in London, we serve customers everywhere in the UK with professional cleaning solutions
      </SectionDescription>

      {/* Mobile-first responsive grid */}
      <Row gutter={[24, 24]} justify="center" style={{ marginTop: "40px" }}>
        {services.map((service, index) => (
          <Col xs={24} sm={24} md={12} lg={10} key={index}>
            <div
              style={{
                position: "relative",
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              className="service-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "60%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Content Container */}
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#18216d",
                    marginBottom: "12px",
                    marginTop: 0,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#555",
                    marginBottom: "16px",
                  }}
                >
                  {service.description}
                </p>

                {/* Call Now and WhatsApp Buttons */}
                <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
                  {/* Call Now Button */}
                  <a
                    href={`tel:${phoneNumber}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "10px 16px",
                      backgroundColor: "#18216d",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: "600",
                      transition: "background-color 0.3s ease",
                      flex: 1,
                      justifyContent: "center",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#0f1542";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#18216d";
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>📞</span>
                    Call Now
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "10px 16px",
                      backgroundColor: "#25D366",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: "600",
                      transition: "background-color 0.3s ease",
                      flex: 1,
                      justifyContent: "center",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1DA851";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#25D366";
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>💬</span>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </SectionWrapper>
  );
};

export default StepVideoBlock;