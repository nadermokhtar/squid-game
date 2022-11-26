import express from "express";

import { clientRouter } from "./clientRouter.js";
import { apiRouter } from "./controllers/api/apiRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api", apiRouter);

export { rootRouter };
