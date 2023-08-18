import { Resend } from "resend";
import * as React from "react";
import { NextResponse } from "next/server";
import EmailTemplate from "@/emails/template";
import { readFileSync } from "fs";
import path from "path";

// Utility function to get the path of the static attachments
const basePath = (name: string) =>
  path.join(process.cwd(), "public", "assets", name);

// Initialize Resend SDK with api key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    // returns the content of the attachments as `Buffer`
    const pdfBuffer = readFileSync(basePath("payment-invoice.pdf"));
    const csvBuffer = readFileSync(basePath("resend-labs.csv"));

    const data = await resend.emails.send({
      from: "Paul <onboarding@resend.dev>",
      to: ["paulehiks@gmail.com"],
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

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
