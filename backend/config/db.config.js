module.exports = {
    HOST: "localhost",
    USER: "postgres", // Replace with your database username
    PASSWORD: "144170964", // Replace with your database password
    DB: "postgres",
    dialect: "postgres", // Change to "postgres" if using PostgreSQL
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
