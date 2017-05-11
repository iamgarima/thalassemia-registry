import Sequelize from 'sequelize';

export default (sequelize) => {
  const Admin = sequelize.define('admin', {
    emailId: {
      type: Sequelize.STRING
    },
    usersList: {
      type: Sequelize.ARRAY(Sequelize.INTEGER)
    }
  });
  Admin.sync({force: false});
  return Admin;
};