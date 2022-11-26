import path, { dirname } from "path";
import { fileURLToPath } from "url";

import { config } from "../config.js";

const getSquidIndexPath = () => {
  const currentPath = dirname(fileURLToPath(import.meta.url));
  let indexPath = path.join(currentPath, "../../public/dist/index.html");
  if (config.nodeEnv !== "production") {
    indexPath = path.join(currentPath, "../../../squid/public/index.html");
  }

  return indexPath;
};

export { getSquidIndexPath };
