"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var apiController = require("../controllers/apiController");
var router = express_1.Router();
router.get('/api/', apiController.helloWord);
exports.ApiRoutes = router;
