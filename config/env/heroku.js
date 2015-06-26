module.exports = {
  connections: {
    postgres: {
      adapter: 'sails-postgresql',
      url: process.env.DATABASE_URL,
      pool: false,
      ssl: true
    }
    .listen(process.env.PORT || 5000);
  }
};