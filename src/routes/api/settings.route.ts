import express from "express";
import { updateSettings, getSettings, getSettingsById } from "@controllers/settings_controller";
import verifyJWT from "@middleware/verifyJWT";
import verifyAPIKey from "@middleware/verifyAPIKey";
import uiSettingsRoutes from "./uiSettings.route";

const settingsRoutes = express.Router();

settingsRoutes.route("/").get([verifyJWT, verifyAPIKey], getSettings);

settingsRoutes.use("/ui", uiSettingsRoutes);

settingsRoutes.route("/:id").get(verifyAPIKey, getSettingsById).put(verifyJWT, updateSettings);

export default settingsRoutes;
