import styled from "styled-components";

export const GalleryWrapper = styled.div`
  padding: 60px 20px;
  text-align: center;
  background: #f9fafb;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 10px;
`;

export const SectionDescription = styled.p`
  max-width: 600px;
  margin: 0 auto 40px auto;
  font-size: 1rem;
  color: #6b7280;
`;

export const ImageCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
`;

export const ImageLabel = styled.div<{ color?: string }>`
  background: ${({ color }) => color || "#3b82f6"};
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 6px 12px;
  text-transform: uppercase;
  text-align: center;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const Caption = styled.p`
  font-size: 0.95rem;
  color: #374151;
  margin-top: 12px;
  text-align: center;
  font-style: italic;
`;
