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
  return (
    <SectionWrapper id={id || "steps"}>
      <SectionTitle>{title || "Customer Showcase"}</SectionTitle>
      <SectionDescription>
        {content ||
          "See how Dirt Be Gone keeps bins sparkling clean in real homes and businesses."}
      </SectionDescription>

      {/* 🔹 Mobile-first responsive grid */}
      <Row gutter={[20, 20]} justify="center">
        {steps.slice(0, 6).map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%", // 16:9 ratio → compact consistent height
                borderRadius: "12px",
                overflow: "hidden",
                background: "#000",
                boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              className="video-card"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // trims instead of stretching
                }}
              >
                <source src={item.src} type="video/mp4" />
                <source src={item.src} type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        ))}
      </Row>
    </SectionWrapper>
  );
};

export default StepVideoBlock;
