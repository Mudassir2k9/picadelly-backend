'use strict';

/**
 * contact-form controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::contact-form.contact-form');


module.exports = createCoreController('api::contact-form.contact-form', ({ strapi }) => ({
  async create(ctx) {
    try {
      const response = await super.create(ctx);
      console.log('Contact form submission saved:', response);
      const { data } = response;
      const { name, email, message } = data.attributes;

      // Send email using Strapi Email plugin
      await strapi.plugins['email'].services.email.send({
        to: 'qaiser.saeed25@gmail.com', // admin email here
        from: "mudassirch2k9@gmail.com",             // user's email (optional)
        subject: `New Contact Form Submission from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Message:
          ${message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message}</p>
        `,
      });

      return response;
    } catch (error) {
      console.error('Email send failed:', error);
      ctx.throw(500, 'Failed to send email');
    }
  },
}));

