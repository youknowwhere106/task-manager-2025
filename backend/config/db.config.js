module.exports = {
    HOST: "localhost",
    USER: "postgres", 
    PASSWORD: "144170964", 
    DB: "postgres",
    dialect: "postgres", 
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
