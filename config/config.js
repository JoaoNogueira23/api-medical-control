const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      user: process.env.MYSQL_USERNAME,
      host: process.env.MYSQL_HOST,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      //socketPath:`/cloudsql/${process.env.INSTANCE_CONNECTION_MYSQL}`
    }
  };
  
  module.exports = config;