# Resend support answers

# Q: How do i create an email?

You can create an email with the following:

### Plain text

Creating a plain text email is the simplest method and is widely supported by email clients. You can send Plain text emails using the “**text**" field

![with-text.png](/support-questions/assets/with-text.png)

### HTML

HTML emails allow for rich formatting and styling. You can send HTML emails using the “**html**” field

![with-html.png](/support-questions/assets/with-html.png)

### React-Email

If you are looking for a more dynamic and customizable way to create emails, you can use the [React-email](https://react.email) library. This allows you to build email templates using React components. You can send React-email templates using the “**React**" field

![with-react-email.png](/support-questions/assets/with-react-email.png)

# Q: I've been waiting 24 hours for my domain to be verified, why is it still pending?

The domain verification process typically takes up to 48-72 hours to complete, although it can occasionally be faster.

The verification process involves DNS (Domain Name System) propagation across the internet, which can sometimes take longer due to various factors like DNS caching and routing updates.

### Here are some things you can do to ensure your domain is verified:

- **Double-check your DNS records**: Ensure that you have correctly added the required DNS records for domain verification.
- **Check the Time-to-live (TTL) settings**: Ensure the TTL settings for your domain are not set too high. a lower TTL (e.g 300 seconds) can speed up the propagation
- **Wait Patiently**: DNS propagation can take up to 48-72 hours. Sometimes, it's just a matter of waiting for the changes to propagate fully.
  If 72 hours have passed and the domain isn’t verified, the verification will fail and you will receive an email from Resend then you can restart the process.

To restart the verification, Delete your domain and recreate it.

# Q: I need to be able to receive emails from Resend. How do I do that?

You currently can not receive emails from Resend. However you can specify an email address that will receive all replies to your email.

This can be done with the "**reply_to**" field.

![with-reply-to.png](/support-questions/assets/with-repy-to.png)

The “**reply_to"** address can be:

- A*n existing email address*
- The _email address of a Slack Channel._

### Here are some helpful resources:

- [Creating an email address for a slack channel](https://slack.com/help/articles/206819278-Send-emails-to-Slack#create-an-email-address)
