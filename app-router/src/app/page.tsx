"use client";

import { useState } from "react";

export default function Home() {
  // Disable button while sending email
  const [activity, setActivity] = useState(false);

  // Function to handle sending the email
  const handleSendEmail = async () => {
    setActivity(true);
    const data = await fetch("/api", { method: "POST" });
    const res = await data.json();
    alert(JSON.stringify(res, null, 2));
    setActivity(false);
  };

  return (
    <main>
      <button onClick={handleSendEmail} disabled={activity}>
        Send Email
      </button>
    </main>
  );
}
