module.exports = {
  apps: [
    {
      name: 'backend',
      cwd: '/var/www/picadelly-backend',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: 'production'
      },
      env_development: {
        NODE_ENV: 'development',
        args: 'develop'
      }
    }
  ]
}
