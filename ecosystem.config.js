module.exports = {
  apps: [
    {
      name: 'backend',
      cwd: '/var/www/picadelly-backend',
      script: 'yarn',
      args: process.env.NODE_ENV === 'development' ? 'develop' : 'start',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
