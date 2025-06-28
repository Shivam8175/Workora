import express from "express";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const JobRouter = express.Router();

JobRouter.route("/post").post(isAuthenticated, postJob);
JobRouter.route("/get").get(isAuthenticated, getAllJobs);
JobRouter.route("/getadminjobs").get(isAuthenticated, getAdminJobs);
JobRouter.route("/get/:id").get(isAuthenticated, getJobById);

export default JobRouter;
