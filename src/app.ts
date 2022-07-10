import express, { Application } from "express";
import { config } from "dotenv";
import indexRoute from "./routes";
import userRoutes from "./routes/userRoutes";
import { errorHandler, httpErrorHandler } from "./middlewares";
import fileupload from "express-fileupload";

// Initialize App
config();
const app: Application = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload());

// Routes
app.use("/", indexRoute);
app.use("/api/users", userRoutes);

// Error Handlers
app.use(httpErrorHandler);
app.use(errorHandler);

// Server
const port: number = Number(process.env.PORT) || 4000;
app.listen(port, () => console.log(`Server running on port: ${port}`));
