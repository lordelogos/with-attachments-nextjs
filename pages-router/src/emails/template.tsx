import {
  Body,
  Container,
  Head,
  Html,
  Section,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

export interface EmailProps {
  customersName: string;
  company: string;
}

export const EmailTemplate = ({
  customersName = "Paul Ehikhuemen",
  company = "Paul Inc.",
}: EmailProps) => (
  <Html>
    <Head />
    <Preview>Thank you for choosing {company}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text> Dear {customersName},</Text>
        <Section>
          <Text>
            Exciting news! Your task is complete and awaiting your review. Find
            attached the finalized work in CSV. Additionally, the payment
            invoice is available for your convenience.
          </Text>
          <Text>
            If questions arise or you need assistance, donot hesitate to contact
            us. We are available to support you!
          </Text>
        </Section>
        <Section>
          <Text>Best regards,</Text>
          <Text>Paul Ehikhuemen</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};
