import Head from "next/head";
import { useState } from "react";

export default function Home() {
  // Disable button while sending email
  const [activity, setActivity] = useState(false);

  // Function to handle sending the email
  const handleSendEmail = async () => {
    setActivity(true);

    const data = await fetch("/api/send", { method: "POST" });
    const res = await data.json();
    alert(JSON.stringify(res, null, 2));

    setActivity(false);
  };
  return (
    <>
      <Head>
        <title>Resend demo with attachments</title>
        <meta
          name="description"
          content="This is a demo of sending emails with attachments from an api route using Resend SDK with nextjs Pages router"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button onClick={handleSendEmail} disabled={activity}>
          Send email
        </button>
      </main>
    </>
  );
}
