import express from "express";

import { squidsRouter } from "./squidsRouter";
const v1Router = new express.Router();

v1Router.use("/squids", squidsRouter);

export { v1Router };
