import { createStrapi } from '@strapi/strapi';

const run = async () => {
  const app = await createStrapi();
  await app.start();

  try {
    await strapi.plugin('email').service('email').send({
      to: 'qaiser.saeed25@gmail.com',       // ✅ your test email
      from: 'mudassirch2k9@gmail.com',      // must match SMTP user
      subject: '✅ Test Email from Strapi 5',
      text: 'This is a test email sent from Strapi 5.',
    });

    console.log('✅ Email sent successfully!');
  } catch (error) {
    console.error('❌ Email failed:', error);
  }

  await app.destroy();
  process.exit(0);
};

run();
