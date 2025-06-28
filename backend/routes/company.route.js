import express from "express";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const CompanyRouter = express.Router();

CompanyRouter.route("/register").post(isAuthenticated, registerCompany);
CompanyRouter.route("/get").get(isAuthenticated, getCompany);
CompanyRouter.route("/get/:id").get(isAuthenticated, getCompanyById);
CompanyRouter.route("/update/:id").put(isAuthenticated, updateCompany);

export default CompanyRouter;
