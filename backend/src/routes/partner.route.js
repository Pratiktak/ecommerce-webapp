const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware.js');
const {
    approvePartner,
    applyForPartner
} = require("../controllers/partner.controller.js");

// apply for partner
router.post("/apply", authMiddleware.protectRoute, applyForPartner)
// approve partner
router.put("/approve/:id", authMiddleware.protectRoute, authMiddleware.isAdmin, approvePartner);

module.exports = router;