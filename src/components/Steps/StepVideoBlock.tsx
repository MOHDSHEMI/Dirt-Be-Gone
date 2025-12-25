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
  // Service data with images and descriptions
  const services = [
    {
      title: "Window Cleaning",
      description: "Crystal-clear windows inside and out. Professional streak-free cleaning for residential and commercial properties across the UK.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    },
    {
      title: "Patio Cleaning",
      description: "Transform your outdoor space with our high-pressure patio cleaning. Remove dirt, algae, and stains to restore your patio's original beauty.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
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
                    margin: 0,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </SectionWrapper>
  );
};

export default StepVideoBlock;