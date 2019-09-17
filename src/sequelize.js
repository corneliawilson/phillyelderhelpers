require('dotenv').config();
const Sequelize = require('sequelize');

module.exports = function (app) {
  const connectionString = process.env.DATABASE_URL;

  // const sequelize = new Sequelize(connectionString, {
  //   dialect: 'postgres',
  //   logging: false,
  //   define: {
  //     freezeTableName: true
  //   },
  //   //comment out the following 4 lines when connecting to local db
  //   // ssl: true,
  //   // dialectOptions: {
  //   //   ssl: true
  //   // }
  // });

  const sequelize = new Sequelize(
    process.env.PG_NAME, process.env.PG_USERNAME, process.env.PG_PASS,
    {
      host: process.env.PG_HOST,
      dialect: 'postgres',
    }
  );
  const oldSetup = app.setup;

  sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

  app.set('sequelizeClient', sequelize);

  app.setup = function (...args) {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const models = sequelize.models;

    Object.keys(models).forEach(name => {
      if ('associate' in models[name]) {
        models[name].associate(models);
      }
    });

    // Sync to the database
    sequelize.sync();

    return result;
  };
};
