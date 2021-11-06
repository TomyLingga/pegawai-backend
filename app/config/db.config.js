module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "tomylingga",
    DB: "pegawai-db",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };