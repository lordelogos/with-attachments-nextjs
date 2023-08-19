This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.
Click the `Send email` button to send an email.

You can edit the [Email template](/pages-router/src/emails/template.tsx) built using `React Email`.

The email is sent using `Resend` from the [Api Route](/pages-router/src/pages/api/send.ts).

## Learn More

To learn more about Resend and React-Email, take a look at the following resources:

- [Resend Documentation](https://resend.com/docs/introduction) - learn about Resend features and integrations
- [React-Email Documentation](https://react.email/docs/introduction) - learn about email templates with React Email
