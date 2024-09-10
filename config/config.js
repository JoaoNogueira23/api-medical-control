const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      connectTimeout: 60000
    },
    listPerPage: 10,
  };
  
  module.exports = config;