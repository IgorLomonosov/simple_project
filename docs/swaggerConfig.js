import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Налаштування Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Note Service API",
      version: "1.0.0",
      description: "API для роботи з нотатками",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"], // Шлях до файлів з описом API
};

const swaggerSpec = swaggerJsdoc(options);

export default { swaggerUi, swaggerSpec };
