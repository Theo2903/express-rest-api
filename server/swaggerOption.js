module.exports = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API V1",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"], // Chemin vers vos fichiers de routes
};
