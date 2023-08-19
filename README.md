# Resend with React Email

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

```bash
cd app-router
```

### 3. Update the `from` and `to` fields from the router handler or api route

- For `App-router`, update [route.ts](/app-router/src/app/api/route.ts)
- For `Pages-router`, update [send.ts](/pages-router/src/pages/api/send.ts)

### 4. Run the development server

```bash
yarn dev
```

### 5. Open it up in your browser and click the `Send email` button
