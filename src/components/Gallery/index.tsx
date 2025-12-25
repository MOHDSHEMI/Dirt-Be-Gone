import { FC } from "react";
import { Row, Col } from "antd";
import {
  GalleryWrapper,
  SectionTitle,
  SectionDescription,
} from "./styles";
import { motion } from "framer-motion";

interface GalleryProps {
  title: string;
  content: string;
  id?: string;
  gallery: {
    before: string;
    after: string;
    caption?: string;
  }[];
}

const GalleryBlock: FC<GalleryProps> = ({ title, content, gallery, id }) => {
  return (
    <GalleryWrapper id={id || "gallery"}>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{content}</SectionDescription>

      <Row gutter={[32, 56]} justify="center" style={{ marginTop: "48px" }}>
        {gallery.map((item, index) => (
          <Col xs={24} lg={22} xl={20} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Modern Green Gradient Container */}
              <div
                style={{
                  background: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
                  borderRadius: "24px",
                  padding: "40px",
                  boxShadow: "0 20px 60px rgba(16, 185, 129, 0.25)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle Pattern Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    pointerEvents: "none",
                  }}
                />

                <Row gutter={[32, 32]} align="middle" style={{ position: "relative", zIndex: 1 }}>
                  {/* Before Image */}
                  <Col xs={24} md={12}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div
                        style={{
                          position: "relative",
                          borderRadius: "16px",
                          overflow: "hidden",
                          boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
                          border: "4px solid rgba(255,255,255,0.2)",
                        }}
                      >
                        {/* Before Label */}
                        <div
                          style={{
                            position: "absolute",
                            top: "20px",
                            left: "20px",
                            background: "#ffffff",
                            color: "#ef4444",
                            padding: "12px 28px",
                            borderRadius: "10px",
                            fontWeight: "700",
                            fontSize: "15px",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            zIndex: 10,
                            boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                            border: "2px solid #ef4444",
                          }}
                        >
                          Before
                        </div>
                        <img
                          src={item.before}
                          alt="Before cleaning"
                          style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                      </div>
                    </motion.div>
                  </Col>

                  {/* After Image */}
                  <Col xs={24} md={12}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div
                        style={{
                          position: "relative",
                          borderRadius: "16px",
                          overflow: "hidden",
                          boxShadow: "0 12px 40px rgba(255,255,255,0.15)",
                          border: "4px solid rgba(255,255,255,0.4)",
                        }}
                      >
                        {/* After Label */}
                        <div
                          style={{
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            background: "#ffffff",
                            color: "#047857",
                            padding: "12px 28px",
                            borderRadius: "10px",
                            fontWeight: "700",
                            fontSize: "15px",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            zIndex: 10,
                            boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                            border: "2px solid #10b981",
                          }}
                        >
                          ✓ After
                        </div>
                        <img
                          src={item.after}
                          alt="After cleaning"
                          style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                      </div>
                    </motion.div>
                  </Col>
                </Row>

                {/* Professional Caption with Glass Effect */}
                {item.caption && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <div
                      style={{
                        marginTop: "32px",
                        padding: "24px 32px",
                        background: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "14px",
                        borderLeft: "5px solid #ffffff",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: "16px",
                          lineHeight: "1.8",
                          color: "#1f2937",
                          textAlign: "left",
                          fontWeight: "500",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            width: "6px",
                            height: "6px",
                            background: "#10b981",
                            borderRadius: "50%",
                            marginRight: "12px",
                            verticalAlign: "middle",
                          }}
                        />
                        {item.caption}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </GalleryWrapper>
  );
};

export default GalleryBlock;