import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { Email, Phone, WhatsApp } from "@mui/icons-material";
import { Typography, Stack, Button } from "@mui/material";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
} from "./styles";

const Footer = ({ t }: { t: TFunction }) => {

  return (
    <>
      <FooterSection
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)",
          padding: "3rem 0",
          borderTop: "1px solid #eaeaea",
        }}
      >
        <Container>
          <Row
            justify="space-between"
            gutter={[16, 24]}
            style={{ flexWrap: "wrap", rowGap: "2rem" }}
          >
            {/* Address Section */}
            <Col xs={24} sm={12} md={8}>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                }}
              >
                <Title
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#222",
                    marginBottom: "0.75rem",
                  }}
                >
                  {t("Address")}
                </Title>

                <Para style={{ fontSize: "0.95rem", color: "#555" }}>
                  London, United Kingdom
                </Para>
                <Para style={{ fontSize: "0.95rem", color: "#555" }}>
                  Kingston Upon Thames
                </Para>
                <Para style={{ fontSize: "0.95rem", marginTop: "10px", color: "#333" }}>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:Info@dirtbegone.co.uk"
                    style={{
                      color: "#007AFF",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Info@dirtbegone.co.uk
                  </a>
                </Para>
                <Para style={{ fontSize: "0.95rem", color: "#333" }}>
                  <strong>Call or Text:</strong>{" "}
                  <a
                    href="tel:07722045308"
                    style={{
                      color: "#2e7d32",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    07722045308
                  </a>
                </Para>
              </div>
            </Col>

            {/* Contact Buttons Section */}
            <Col xs={24} sm={12} md={8}>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#222",
                    fontSize: { xs: "1.1rem", sm: "1.2rem" },
                  }}
                >
                  Contact Us
                </Typography>

                <Stack spacing={1.5} mt={2}>
                  {/* Email */}
                  <Button
                    startIcon={<Email />}
                    href="mailto:Info@dirtbegone.co.uk"
                    variant="contained"
                    size="medium"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: "30px",
                      background: "linear-gradient(90deg, #007AFF 0%, #66B2FF 100%)",
                      color: "#fff",
                      boxShadow: "0 4px 12px rgba(0,122,255,0.2)",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #0066CC 0%, #3399FF 100%)",
                        boxShadow: "0 6px 14px rgba(0,122,255,0.3)",
                      },
                      px: 3,
                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      width: "fit-content",
                    }}
                  >
                    Email Us
                  </Button>

                  {/* Phone */}
                  <Button
                    startIcon={<Phone />}
                    href="tel:07722045308"
                    variant="contained"
                    size="medium"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: "30px",
                      background: "linear-gradient(90deg, #43A047 0%, #81C784 100%)",
                      color: "#fff",
                      boxShadow: "0 4px 12px rgba(67,160,71,0.2)",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #2E7D32 0%, #66BB6A 100%)",
                        boxShadow: "0 6px 14px rgba(67,160,71,0.3)",
                      },
                      px: 3,
                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      width: "fit-content",
                    }}
                  >
                    Call / Text
                  </Button>

                  {/* WhatsApp */}
                  <Button
                    startIcon={<WhatsApp />}
                    href="https://wa.me/447722045308"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="medium"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: "30px",
                      background: "linear-gradient(90deg, #25D366 0%, #5EE577 100%)",
                      color: "#fff",
                      boxShadow: "0 4px 12px rgba(37,211,102,0.25)",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #20c25a 0%, #34d96d 100%)",
                        boxShadow: "0 6px 14px rgba(37,211,102,0.4)",
                      },
                      px: 3,
                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      width: "fit-content",
                    }}
                  >
                    WhatsApp
                  </Button>
                </Stack>
              </div>
            </Col>
          </Row>
        </Container>
      </FooterSection>

      <Extra
        style={{
          background: "linear-gradient(135deg, #0f9b0f 0%, #007a3d 100%)",
          padding: "2rem 0",
        }}
      >
        <Container border={false}>
          <Row
            justify="space-between"
            align="middle"
            style={{
              flexWrap: "wrap",
              textAlign: "center",
              rowGap: "1.5rem",
            }}
          >
            {/* Logo Section */}
            <Col xs={24} sm={12} md={8}>
              <NavLink to="/">
                <LogoContainer
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="110px"
                    height="68px"
                  />
                </LogoContainer>
              </NavLink>
            </Col>

            {/* Social Icons Section */}
            <Col xs={24} sm={12} md={8}>
              <Stack
                direction="row"
                justifyContent="center"
                spacing={2}
                sx={{
                  flexWrap: "wrap",
                  mt: { xs: 1, sm: 0 },
                }}
              >
                {/* Facebook */}
                <IconButton
                  component="a"
                  href="https://www.facebook.com/share/14Kxe9x7Mza/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  sx={{
                    bgcolor: "white",
                    color: "#1877F2",
                    "&:hover": {
                      bgcolor: "#1877F2",
                      color: "#fff",
                    },
                    width: 44,
                    height: 44,
                    boxShadow: 2,
                  }}
                >
                  <FacebookIcon />
                </IconButton>

                {/* Instagram */}
                <IconButton
                  component="a"
                  href="https://www.instagram.com/dirtbegone.uk?igsh=MXg3Ynh2dmh3YnNucw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  sx={{
                    bgcolor: "white",
                    color: "#E4405F",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background:
                        "linear-gradient(45deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)",
                      transform: "scale(1.05)",
                      color: "#fff",
                    },
                    "&:hover svg": {
                      color: "#fff",
                    },
                    width: 44,
                    height: 44,
                    boxShadow: 2,
                  }}
                >
                  <InstagramIcon sx={{ fontSize: 22 }} />
                </IconButton>


                {/* TikTok */}
                <IconButton
                  component="a"
                  href="https://www.tiktok.com/@dirtbegone.co.uk?_t=ZN-8zuZzxYE9rC&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  sx={{
                    bgcolor: "white",
                    color: "#000000",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #69C9D0 0%, #EE1D52 50%, #010101 100%)",
                      transform: "scale(1.05)",
                      color: "#fff",
                    },
                    width: 44,
                    height: 44,
                    boxShadow: 2,
                  }}
                >
                  <SvgIcon src="tiktok-svgrepo-com.svg" width="22px" height="22px" />
                </IconButton>
              </Stack>
            </Col>

            {/* Footer Text */}
            <Col xs={24}>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  mt: 2,
                }}
              >
                © {new Date().getFullYear()} Dirt Be Gone. All Rights Reserved.
              </Typography>
            </Col>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
