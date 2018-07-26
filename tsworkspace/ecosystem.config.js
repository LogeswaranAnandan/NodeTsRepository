module.exports = {
  apps : [{
    name      : 'WcsServer',
    script    : './build/app.js',
    watch     : true,
    instances : 'max',
    exec_mode : 'cluster',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    },
    'pre-deploy'  : "echo 'inside pre-deploy'",
    'pre-setup'   : "echo 'inside pre-setup'"
  }]

  // deploy : {
  //   production : {
  //     user : 'node',
  //     host : 'localhost',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:repo.git',
  //     path : '/build',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
  //   }
  // }
};
