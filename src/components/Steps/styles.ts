import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 70px 16px;
  background: linear-gradient(135deg, #eafaf1, #f9fffb);
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2e7d32;
  margin-bottom: 12px;
  line-height: 1.3;
`;

export const SectionDescription = styled.p`
  max-width: 640px;
  margin: 0 auto 32px;
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

export const StepCard = styled.div`
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 128, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 22px rgba(0, 128, 0, 0.15);
  }
`;

export const StepNumber = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: #2e7d32;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  margin-bottom: 6px;
`;

export const StepTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;

export const StyledVideo = styled.video`
  width: 100%;
  aspect-ratio: 16 / 15; /* ✅ keeps height compact & consistent */
  border-radius: 10px;
  border: 2px solid #e0f2f1;
  object-fit: cover;
  display: block;
  background: #000; /* fallback if video doesn’t load */
`;
