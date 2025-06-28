import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/mogodb.config.js";
import UserRouter from "./routes/user.route.js";
import CompanyRouter from "./routes/company.route.js";
import JobRouter from "./routes/job.route.js";
import ApplicationRouter from "./routes/application.route.js";
dotenv.config({});

const app = express();

app.get("/home", (req, res) => {
  res.status(200).json({ message: "this is from backend", success: true });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", UserRouter);
app.use("/api/v1/company", CompanyRouter);
app.use("/api/v1/job", JobRouter);
app.use("/api/v1/application", ApplicationRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port http://localhost:${PORT}/api/v1/user`);
});
