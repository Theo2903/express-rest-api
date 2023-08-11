const { Sequelize } = require("sequelize");
const waitOn = require("wait-on");

const waitOnOptions = {
  resources: [`tcp:mysqldb:${process.env.MYSQL_PORT}`],
  timeout: 30000,
};

// Configuration de Sequelize
const sequelize = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASS,
  {
    host: "mysqldb",
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
  }
);

(async () => {
  try {
    // Vérification de la disponibilité de la base de données
    await waitOn(waitOnOptions);

    // Connexion à la base de données
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Synchronisation des modèles avec la base de données
    await sequelize.sync();

    console.log("Database synced successfully!");
  } catch (error) {
    console.error(
      "Error waiting for MySQL or connecting to the database:",
      error.message
    );
  }
})();

module.exports = sequelize;
