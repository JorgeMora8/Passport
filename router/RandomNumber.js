import express from "express";
import {randomNumberController} from "../Controllers/RandomController.js"
import {requireAuthentication} from "../middleware/auth.js"

const RandomNumberRouter = express.Router();

RandomNumberRouter.get("/", requireAuthentication, randomNumberController)

export { RandomNumberRouter }