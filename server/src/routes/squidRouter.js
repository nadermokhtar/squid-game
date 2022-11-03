import express from "express";

import { getSquidIndexPath } from "../config/getSquidIndexPath.js";

const squidRouter = new express.Router();

const squidRoutes = ["/squids"];
squidRouter.get(squidRoutes, (req, res) => {
  res.sendFile(getSquidIndexPath());
});

export { squidRouter };
