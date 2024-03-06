module.exports = {
  apps: [
    {
      name: "singsing.com-v2",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "development",
        PORT: 3001,
       
      },
    },
  ],
};
