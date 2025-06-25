import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Html,
  Img,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  phone: string;
  city: string;
  ward: string;
  driver_license: string;
  riding_experience: string;
  own_smartphone: string;
  heard_about_us: string;
}

const CaptainSubmissionEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  phone,
  city,
  ward,
  driver_license,
  riding_experience,
  own_smartphone,
  heard_about_us,
}) => {
  return (
    <Html
      style={{
        paddingTop: "64px",
        paddingInline: "20px",
        // backgroundColor: "#fff",
      }}
    >
      <Head>
        <Font
          fallbackFontFamily={"Arial"}
          fontFamily="inter"
          fontWeight={"normal"}
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
            format: "opentype",
          }}
        />
      </Head>
      <Body>
        <Container style={{ maxWidth: "460px" }}>
          <Img
            src={
              "https://raw.githubusercontent.com/kintungi/ekomobility/refs/heads/main/public/images/ekomobility_logo.png"
            }
            alt="EkoMobility logo"
            height={32}
            width={158.6}
            style={{ marginBottom: "64px" }}
          />
          <p style={{ lineHeight: "24px" }}>
            Hi, My name is {name}, I would like to become a captain. Please
            checkout my details below.
          </p>
          <Container style={{ gap: "0px" }}>
            <p style={{ lineHeight: "16px" }}>
              <span style={{ color: "gray" }}>Full name:</span> {name}
            </p>
            <p>
              <span style={{ color: "gray" }}>Phone number:</span> {phone}
            </p>
            <p style={{ lineHeight: "16px" }}>
              <span style={{ color: "gray" }}>City / Town:</span> {city}
            </p>
            <p style={{ lineHeight: "16px" }}>
              <span style={{ color: "gray" }}>Ward / Area:</span> {ward}
            </p>
            <p style={{ lineHeight: "16px" }}>
              <span style={{ color: "gray" }}>Driving license?:</span>{" "}
              {driver_license}
            </p>
            <p style={{ lineHeight: "16px" }}>
              <span style={{ color: "gray" }}>Riding experience?:</span>{" "}
              {riding_experience} years
            </p>
            <p style={{ lineHeight: "16px" }}>
              <span style={{ color: "gray" }}>Owning smartphone?:</span>{" "}
              {own_smartphone}
            </p>
            <p style={{ lineHeight: "16px" }}>
              <span style={{ color: "gray" }}>How did you hear about us?:</span>{" "}
              {heard_about_us}
            </p>
          </Container>
        </Container>
      </Body>
    </Html>
  );
};

export default CaptainSubmissionEmail;
