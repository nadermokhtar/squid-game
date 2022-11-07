import express from "express";

import { squidsRouter } from "./squidsRouter";
const v1Router = express.Router();

v1Router.use("/squids", squidsRouter);

export { v1Router };
