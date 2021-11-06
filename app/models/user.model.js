module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      nama: {
        type: Sequelize.STRING
      },
      nip: {
        type: Sequelize.INTEGER
      },
      alamat: {
        type: Sequelize.STRING
      },
      nohp: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };