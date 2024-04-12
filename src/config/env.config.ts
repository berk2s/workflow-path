import dotenv from "dotenv";
import path from "path";

/**
 * Setups .env file into project
 */
dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});
