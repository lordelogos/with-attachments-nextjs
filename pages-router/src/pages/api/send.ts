import { Resend } from "resend";
import * as React from "react";
import EmailTemplate from "@/emails/template";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { readFileSync } from "fs";

// Utility function to get the path of the static attachments
const basePath = (name: string) =>
  path.join(process.cwd(), "public", "assets", name);

// Initialize Resend SDK with api key
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get the method from the request object
  const { method } = req;

  switch (method) {
    case "POST":
      const pdfBuffer = readFileSync(basePath("payment-invoice.pdf"));
      const csvBuffer = readFileSync(basePath("resend-labs.csv"));

      try {
        const data = await resend.emails.send({
          from: "Paul <onboarding@resend.dev>",
          // to: ["paulehiks@gmail.com"],
          to: ["delivered@resend.dev"],
          subject: "Your Completed Work and Payment Invoice",
          attachments: [
            {
              // path: 'path/to/attachment', // <-- use `path` only for hosted attachments
              content: pdfBuffer,
              filename: "payment-invoice.pdf",
            },
            {
              content: csvBuffer,
              filename: "resend-labs.csv",
            },
          ],
          react: EmailTemplate({
            customersName: "Paul Ehikhuemen",
            company: "Paul Inc.",
          }) as React.ReactElement,
        });

        res.json(data);
      } catch (error) {
        res.status(400).json({ error });
      }
    default:
      res.status(405);
  }
}
