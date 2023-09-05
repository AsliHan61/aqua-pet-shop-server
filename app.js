// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./aqua-pet-shop-server/db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./aqua-pet-shop-server/config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./aqua-pet-shop-server/routes/index.routes");
app.use("/api", indexRoutes);

const productsRoutes = require("./aqua-pet-shop-server/routes/products.routes");
app.use("/api", productsRoutes);

const extraServiceRoutes = require("./aqua-pet-shop-server/routes/extraservice.routes");
app.use("/api", extraServiceRoutes);

const orderRoutes = require("./aqua-pet-shop-server/routes/order.routes");
app.use("/api", orderRoutes);

const authRoutes = require("./aqua-pet-shop-server/routes/auth.routes");
app.use("/auth", authRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./aqua-pet-shop-server/error-handling")(app);

module.exports = app;