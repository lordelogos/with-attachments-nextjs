# Resend with React Email and attachments

This repo contains examples of how to send emails with Resend using React Email and NextJs.
It contains two examples:

- [Using Resend with NextJS App Router](/app-router/)
- [Using Resend with NextJS Pages Router](/pages-router/)

## How to run

### 1. Clone the repository

```bash
git clone https://github.com/lordelogos/with-attachments-nextjs.git
```

### 2. Select the example you want to view (e.g app-router)

Install the dependencies

```bash
cd app-router
npm run dev
```

### 3. Create a `.env` file in the selected project and add your `Resend API key`

```bash
RESEND_API_KEY=re_8m9gwsVG_6n94KaJkJ42Yj6qSeVvLq9xF
```

### 4. Update the `from` and `to` fields from the router handler or api route

**Note:** The `to` must be a verified `domain` in your `resend` account. [Read more](https://resend.com/docs/dashboard/domains/introduction)

- For `App-router`, update [route.ts](/app-router/src/app/api/route.ts)
- For `Pages-router`, update [send.ts](/pages-router/src/pages/api/send.ts)

### 5. Run the development server

```bash
yarn dev
```

### 6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Click the `Send email` button to send an email
