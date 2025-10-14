'use strict';

/**
 * contact-form controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-form.contact-form', ({ strapi }) => ({
  async create(ctx) {
    try {
      // Create the contact entry using Strapi core logic
      const response = await super.create(ctx);
      console.log('✅ Contact form submission saved:', response);

      // Extract data safely depending on structure
      const { data } = response;

      // Strapi v4 usually nests fields in `data.attributes`
      const formData = data?.attributes || data || {};

      const {
        name = 'Unknown',
        email = 'no-reply@example.com',
        message = '',
        company = '',
        phone = ''
      } = formData;

      // console.log('📩 Contact form data:', formData);
      const fromEmail = process.env.SMTP_DEFAULT_FROM || 'no-reply@yourdomain.com';
      const toEmail = process.env.SMTP_DEFAULT_TO || 'hello@piccadillyad.com';

      // Send email using Strapi Email plugin
      await strapi.plugins['email'].services.email.send({
        to: toEmail, // Admin email
        from: fromEmail, // Can be user email if verified
        cc: 'mudassirch2k9@gmail.com', // Optional CC
        subject: `New Contact Form Submission from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Company: ${company}
          Phone: ${phone}
          Message:
          ${message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong><br>${message}</p>
        `,
      });

      console.log('✅ Email sent successfully');
      return response;

    } catch (error) {
      console.error('❌ Email send failed:', error);
      ctx.throw(500, 'Failed to send email');
    }
  },
}));
