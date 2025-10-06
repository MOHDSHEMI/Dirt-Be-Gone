import { FC } from "react";
import { Row, Col } from "antd";
import {
  GalleryWrapper,
  ImageCard,
  ImageLabel,
  StyledImage,
  Caption,
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

      <Row gutter={[32, 48]} justify="center">
        {gallery.map((item, index) => (
          <Col xs={24} md={20} lg={16} key={index}>
            <Row gutter={[24, 24]} justify="center" align="middle">
              {/* Before */}
              <Col xs={24} md={12}>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <ImageCard>
                    <ImageLabel color="#ef4444">Before</ImageLabel>
                    <StyledImage src={item.before} alt="Before" />
                  </ImageCard>
                </motion.div>
              </Col>

              {/* After */}
              <Col xs={24} md={12}>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <ImageCard>
                    <ImageLabel color="#22c55e">After</ImageLabel>
                    <StyledImage src={item.after} alt="After" />
                  </ImageCard>
                </motion.div>
              </Col>

              {/* Caption */}
              {item.caption && (
                <Col span={24}>
                  <Caption>{item.caption}</Caption>
                </Col>
              )}
            </Row>
          </Col>
        ))}
      </Row>
    </GalleryWrapper>
  );
};

export default GalleryBlock;
