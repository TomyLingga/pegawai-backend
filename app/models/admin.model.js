module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("Admin", {
      nama: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return Admin;
  };